import { BackToTop } from "@/components/BackToTop";
import { BrandIcon, isBrand } from "@/components/BrandIcon";
import { ContactButton, ContactDialog } from "@/components/ContactDialog";
import { Credentials, Recommendations } from "@/components/Credentials";
import { Achievements } from "@/components/Achievements";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { ExternalLink, Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { Writing } from "@/components/Writing";
import {
  credentials,
  achievements,
  careerSummary,
  links,
  profile,
  projects,
  recommendations,
  skills,
  spokenLanguages,
} from "@/content/profile";
import { getDownloadCount } from "@/lib/downloads";
import { getRepoStats } from "@/lib/github";
import { getPosts } from "@/lib/medium";

// Rebuild at most hourly so Medium posts and GitHub stats stay fresh.
export const revalidate = 3600;

export default async function Home() {
  const tracked = projects.filter((p) => p.downloadsUrl);
  const [repoStats, posts, counts] = await Promise.all([
    getRepoStats(links.github.user),
    getPosts(links.medium.user),
    Promise.all(tracked.map((p) => getDownloadCount(p.downloadsUrl!))),
  ]);
  const downloads = new Map(
    tracked.flatMap((p, i) => {
      const count = counts[i];
      return count ? [[p.name, count] as const] : [];
    }),
  );
  const totalInstalls = [...downloads.values()].reduce((sum, d) => sum + d.total, 0);

  // Sections with no content are left out, along with their nav entries.
  const sections = [
    { id: "showcase", title: "showcase", show: projects.length > 0 },
    { id: "experience", title: "experience", show: achievements.length > 0 },
    { id: "skills", title: "skills", show: skills.length > 0 },
    { id: "writing", title: "writing", show: true },
    { id: "testimonials", title: "testimonials", show: recommendations.length > 0 },
    { id: "credentials", title: "credentials", show: credentials.length > 0 },
    { id: "contact", title: "contact", show: true },
  ].filter((s) => s.show);
  const indexOf = (id: string) => sections.findIndex((s) => s.id === id) + 1;

  const stats = [
    profile.yearsOfExperience && { value: `${profile.yearsOfExperience}+`, label: "years shipping" },
    repoStats.size > 0 && { value: String(repoStats.size), label: "open-source repos" },
    posts.length > 0 && { value: `${posts.length}${posts.length >= 10 ? "+" : ""}`, label: "technical articles" },
    totalInstalls > 0 && { value: totalInstalls.toLocaleString("en"), label: "plugin installs" },
  ].filter((s): s is { value: string; label: string } => Boolean(s));

  // dateModified reflects real content changes: the newest Medium post or push to a showcased repo.
  // (Not "now": the page regenerates hourly, and claiming a change every hour would be inaccurate.)
  const contentDates = [
    ...posts.map((post) => post.date),
    ...projects.flatMap((p) => (p.repo && repoStats.get(p.repo)?.pushedAt) || p.updated || []),
  ].filter((d) => !Number.isNaN(Date.parse(d)));
  const lastContentUpdate = contentDates.length
    ? new Date(Math.max(...contentDates.map((d) => Date.parse(d)))).toISOString()
    : undefined;

  // Structured data: lets Google and AI assistants tie this page to the same person on GitHub,
  // LinkedIn, Medium and Stack Overflow, with job title, employer and education.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: profile.siteUrl,
    dateCreated: profile.siteCreated,
    ...(lastContentUpdate && { dateModified: lastContentUpdate }),
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      url: profile.siteUrl,
      image: `${profile.siteUrl}${profile.photo}`,
      description: profile.seoDescription,
      jobTitle: profile.jobTitle,
      worksFor: { "@type": "Organization", ...profile.employer },
      alumniOf: profile.alumniOf.map((name) => ({ "@type": "CollegeOrUniversity", name })),
      address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
      contactPoint: { "@type": "ContactPoint", contactType: "professional inquiries", url: `${profile.siteUrl}/#contact` },
      knowsAbout: skills.flatMap((g) => g.items),
      sameAs: Object.values(links).map((l) => l.href),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-20 focus:bg-accent focus:px-3 focus:py-1 focus:text-bg">
        Skip to content
      </a>
      <Nav sections={sections} />
      <main id="main" className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero stats={stats} />

        {projects.length > 0 && (
          <Section
            id="showcase"
            index={indexOf("showcase")}
            title="showcase"
            aside={
              <ExternalLink href={links.github.href} className="font-mono text-sm text-muted">
                all repos
              </ExternalLink>
            }
          >
            <Projects projects={projects} stats={repoStats} downloads={downloads} />
          </Section>
        )}

        {achievements.length > 0 && (
          <Section id="experience" index={indexOf("experience")} title="experience">
            <Achievements summary={careerSummary} items={achievements} />
          </Section>
        )}

        <Section id="skills" index={indexOf("skills")} title="skills">
          <Skills groups={skills} languages={spokenLanguages} />
        </Section>

        <Section
          id="writing"
          index={indexOf("writing")}
          title="writing"
          aside={
            <ExternalLink href={links.medium.href} className="font-mono text-sm text-muted">
              all posts
            </ExternalLink>
          }
        >
          <Writing posts={posts.slice(0, 6)} />
        </Section>

        {recommendations.length > 0 && (
          <Section id="testimonials" index={indexOf("testimonials")} title="testimonials">
            <Recommendations items={recommendations} />
          </Section>
        )}

        {credentials.length > 0 && (
          <Section id="credentials" index={indexOf("credentials")} title="credentials">
            <Credentials items={credentials} />
          </Section>
        )}

        <Section id="contact" index={indexOf("contact")} title="contact">
          <p className="max-w-xl text-2xl font-medium tracking-tight text-balance sm:text-3xl">
            Hiring for AI or full-stack leadership? Let&apos;s talk.
          </p>
          <ContactButton className="mt-8 inline-block rounded bg-accent px-5 py-2.5 font-mono font-medium text-bg transition-opacity hover:opacity-90">
            get in touch
          </ContactButton>
          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm text-muted">
            {Object.entries(links).map(([key, l]) => (
              <li key={l.href}>
                <ExternalLink href={l.href} me>
                  {isBrand(key) && <BrandIcon name={key} className="mr-1.5 inline-block size-3.5 align-[-2px]" />}
                  {l.label.toLowerCase()}
                </ExternalLink>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-xl text-sm text-muted">{profile.hobbies}</p>
        </Section>
      </main>
      <ContactDialog />
      <BackToTop />
      <footer className="border-t border-border">
        <p className="mx-auto max-w-5xl px-4 py-8 font-mono text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  );
}

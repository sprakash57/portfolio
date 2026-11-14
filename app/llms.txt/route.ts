import {
  achievements,
  careerSummary,
  credentials,
  links,
  profile,
  projects,
  skills,
} from "@/content/profile";

// /llms.txt: a plain-Markdown summary of the site for AI assistants and answer engines
// (https://llmstxt.org). Built from the same content as the page, so the two never drift.
export const revalidate = 3600;

export function GET() {
  const md = [
    `# ${profile.name}`,
    "",
    `> ${profile.seoDescription}`,
    "",
    profile.pitch,
    "",
    `Location: ${profile.location}. Contact: the form at ${profile.siteUrl}/#contact. Website: ${profile.siteUrl}`,
    "",
    "## Career",
    "",
    careerSummary,
    "",
    ...achievements.flatMap((a) => [
      `- **${a.title}** (${a.org}, ${a.period})${a.metric ? `: ${a.metric}` : ""}. ${a.description}`,
    ]),
    "",
    "## Projects",
    "",
    ...projects.map((p) => `- [${p.name}](${p.href}): ${p.tagline}. ${p.description}`),
    "",
    "## Skills",
    "",
    ...skills.map((g) => `- ${g.label}: ${g.items.join(", ")}`),
    "",
    "## Education and credentials",
    "",
    ...credentials.map((c) => `- ${c.title}, ${c.issuer}${c.year ? ` (${c.year})` : ""}`),
    "",
    "## Profiles",
    "",
    ...Object.values(links).map((l) => `- [${l.label}](${l.href})`),
    "",
  ].join("\n");

  return new Response(md, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}

/**
 * Single source of truth for everything shown on the site.
 *
 * Sections whose list is empty are not rendered, so you can fill these in
 * gradually. Search for "TODO" to find what still needs your input.
 */

export const profile = {
  name: "Sunny Prakash",
  handle: "sunny",
  roles: ["AI Engineer", "Lead Full-stack Developer"],
  location: "Berlin, Germany",
  // Set to false to hide the "open to opportunities" badge.
  openToWork: true,
  // First professional role (Cognizant, 2015). Years of experience are derived from this.
  careerStartYear: 2015,
  // Getters, so the count is recalculated on each render instead of frozen at server start.
  get yearsOfExperience(): number {
    return new Date().getFullYear() - this.careerStartYear;
  },
  // Tune this to your own voice. Keep it under ~40 words.
  get pitch(): string {
    return `${this.yearsOfExperience} years of building software solutions for web and mobile. Leading AI-native engineering teams that build distributed, multi-tenant platforms and orchestrate autonomous multi-agent workflows. An advocate of context engineering and eval-driven development.`;
  },
  /** Search-result snippet: third person and under ~155 characters so Google doesn't cut it. */
  get seoDescription(): string {
    return `Sunny Prakash: Berlin-based engineering lead and AI engineer with ${this.yearsOfExperience} years in web and mobile, leading AI-native teams and multi-agent systems.`;
  },
  // Used in structured data (JSON-LD) for search engines and AI assistants.
  jobTitle: "Engineering Lead",
  employer: { name: "Berliner Verlag", url: "https://berlinerverlag.com" },
  alumniOf: ["The University of Texas at Austin, McCombs School of Business", "Birla Institute of Technology, Mesra"],
  photo: "/sunny.jpg",
  email: "info@sunnyprakash.com",
  hobbies:
    "Off the clock: father, storyteller, Naruto fan, and you'll find me in The Elder Scrolls Online as @suprdev.",
  siteUrl: "https://sunnyprakash.com",
};

export const links = {
  github: {
    label: "GitHub",
    href: "https://github.com/sprakash57",
    user: "sprakash57",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sunnyprakash12",
  },
  medium: {
    label: "Medium",
    href: "https://sunny-prakash.medium.com",
    user: "sunny-prakash",
  },
  stackoverflow: {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/9585068/sunny-prakash",
  },
} as const;

/** One-paragraph career synopsis shown above the achievements. */
export const careerSummary =
  "Engineering Lead at Berliner Verlag since 2025, leading a team of 11: hiring, performance reviews, mentoring, and partnering with product managers to take AI features from first scoping to production. Before that, a decade across healthtech (DHC), brand analytics (Latana) and banking (Mastercard, Infosys), starting at Cognizant in 2015.";

export type Achievement = {
  title: string;
  org: string;
  period: string;
  /** Headline result shown large beside the entry. */
  metric?: string;
  description: string;
  tags: string[];
};

// High-impact work only, newest first. Source: Sunny_Prakash_CV.pdf and LinkedIn.
export const achievements: Achievement[] = [
  {
    title: "Autonomous multi-agent publishing",
    org: "Berliner Verlag",
    period: "2025 – now",
    metric: "live in production",
    description:
      "Led the technical strategy and cross-functional delivery of a production-grade multi-agent system that autonomously generates and publishes articles to the live websites of high-traffic newspaper brands, with custom agentic tooling and guardrails.",
    tags: [
      "multi-agent systems",
      "LLM integration",
      "RAG",
      "agentic guardrails",
      "NestJS",
    ],
  },
  {
    title: "Multi-tenant platform and legacy migration",
    org: "Berliner Verlag",
    period: "2025 – now",
    metric: "top 6 on Google",
    description:
      "Set the architectural direction for a distributed, multi-tenant platform that runs every flagship newspaper and can onboard external regional publishers as new tenants, guiding the teams through complex legacy migrations. Technical SEO on the new stack moved Berliner Zeitung into Google's top 6 results.",
    tags: [
      "system design",
      "multi-tenancy",
      "microservices",
      "legacy migration",
      "technical SEO",
    ],
  },
  {
    title: "Delivery platform and CI/CD guardrails",
    org: "Berliner Verlag",
    period: "2025 – now",
    metric: "−40% deploy time",
    description:
      "Architected a back office for editors and engineers that cut deployment time by 40%, and standardised CI/CD pipelines, automated testing and deployment guardrails across the department, improving the release workflow by 25%.",
    tags: [
      "CI/CD",
      "GitHub Actions",
      "platform engineering",
      "test automation",
      "developer experience",
    ],
  },
  {
    title: "Care plan engine for rare diseases",
    org: "DHC",
    period: "2024 – 2025",
    metric: "1,000+ patients",
    description:
      "Led end-to-end engineering of a care plan engine that replaced paper-based workflows for more than 1,000 patients: scalable backend services on Node.js, NestJS and AWS, containerised with Docker and scaled on Kubernetes, with web and mobile clients in Next.js and React Native.",
    tags: ["NestJS", "AWS", "Kubernetes", "tRPC", "React Native"],
  },
  {
    title: "High-performance analytics dashboards",
    org: "Latana",
    period: "2021 – 2023",
    metric: "−30% CI time",
    description:
      "Built server-side-rendered analytics dashboards that render brand-tracking data in under a second, refactored the legacy frontend into a modular component library through profiling and code splitting, and migrated testing to Playwright, cutting CI time by 30%.",
    tags: [
      "SSR",
      "web performance",
      "code splitting",
      "Playwright",
      "design systems",
    ],
  },
  {
    title: "Micro-frontends for case management",
    org: "Mastercard",
    period: "2020 – 2021",
    metric: "independent deploys",
    description:
      "Designed microservices and REST APIs for real-time analytics and case management, and a micro-frontend framework that decoupled teams so core banking modules could ship on independent release cycles.",
    tags: [
      "micro-frontends",
      "microservices",
      "REST APIs",
      "real-time analytics",
    ],
  },
];

/**
 * Anything shown in the showcase. Order here doesn't matter: items are sorted
 * newest first by GitHub's last push (for `repo` items) or by `updated`.
 *
 * To add an app or external service without a public repo, leave out `repo`,
 * point `href` at the store page or live URL, and set `updated`.
 */
export type Project = {
  /** GitHub repo name under links.github.user, used to pull live stats and the sort date. */
  repo?: string;
  /** ISO date (e.g. "2026-09-01") of the last release, for items without a GitHub repo. */
  updated?: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  href: string;
  /** Static metric you want to show; live stars are added automatically. */
  metric?: string;
  /**
   * Raw URL of a JSON file of daily install/download counts ({ "YYYY-MM-DD": n }). When set, the
   * card shows the live total (refreshed hourly) instead of `metric`, which stays as the fallback.
   */
  downloadsUrl?: string;
  kind: "AI" | "Tool" | "App" | "Library" | "Service";
};

export const projects: Project[] = [
  {
    repo: "incident-investigator",
    name: "Incident Investigator",
    kind: "AI",
    tagline: "An AI assistant for on-call engineers",
    description:
      "Describe an incident in plain language. The agent plans an investigation, pulls logs, metrics, topology and recent changes, and returns a root-cause report in which every claim links back to the tool call behind it. Ships with a deterministic eval harness.",
    stack: ["Python", "PydanticAI", "LLM agents", "Evals"],
    href: "https://github.com/sprakash57/incident-investigator",
  },
  {
    repo: "claude-usage-line",
    name: "usage-line",
    kind: "Tool",
    tagline: "Claude Code plugin for usage limits",
    description:
      "Shows every Claude Code limit in the status line with a traffic light each: 5-hour, weekly, compaction, spend and prompt-cache warmth, plus reset times and a turn forecast. Runs locally with no telemetry.",
    stack: ["TypeScript", "Claude Code", "CLI"],
    href: "https://github.com/sprakash57/claude-usage-line",
    metric: "150+ installs",
    downloadsUrl: "https://raw.githubusercontent.com/sprakash57/claude-usage-line/main/.github/clones.json",
  },
  {
    repo: "snapteil",
    name: "Snapteil",
    kind: "App",
    tagline: "Real-time photo sharing",
    description:
      "Upload, tag and filter photos, with other users notified of new posts live over WebSockets. A Go (Fiber) API with server-side image processing (AVIF/WebP), a React 19 client, and Swagger docs, all running with one Docker Compose command.",
    stack: ["Go", "Fiber", "WebSocket", "React", "Docker"],
    href: "https://github.com/sprakash57/snapteil",
  },
  {
    repo: "shortify",
    name: "Shortify",
    kind: "App",
    tagline: "URL shortener with documented API",
    description:
      "A Vue + Express + MongoDB URL shortener with an OpenAPI spec and a Docker Compose setup that runs with one command.",
    stack: ["Vue", "Express", "MongoDB", "Docker"],
    href: "https://github.com/sprakash57/shortify",
  },
  {
    repo: "vendi-man",
    name: "vendi-man",
    kind: "App",
    tagline: "Vending machine REST API",
    description:
      "A REST API for buying and selling products from a vending machine: user deposits, session auth with refresh tokens and logout-everywhere, product CRUD, a test suite and a Postman collection, plus a React client.",
    stack: ["Node.js", "Express", "MongoDB", "TypeScript"],
    href: "https://github.com/sprakash57/vendi-man",
  },
  {
    repo: "articlyzer-project",
    name: "Articlyzer",
    kind: "AI",
    tagline: "NLP article analyser",
    description:
      "A web app that analyses an article with natural language processing and reports reading time, word count and the most frequent words.",
    stack: ["Python", "Django", "NLTK", "NLP"],
    href: "https://github.com/sprakash57/articlyzer-project",
  },
];

export type SkillGroup = { label: string; items: string[] };

// Prune or extend. Strongest skills first in each group.
export const skills: SkillGroup[] = [
  {
    label: "ai",
    items: [
      "LLM agents",
      "Secure agentic AI",
      "RAG",
      "Tool calling",
      "Evals",
      "PydanticAI",
      "Claude Code",
    ],
  },
  {
    label: "frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Vue",
      "Tailwind CSS",
      "React Query",
    ],
  },
  {
    label: "backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "Python",
      "FastAPI",
      "REST",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    label: "platform",
    items: [
      "AWS",
      "Cloudflare",
      "Docker",
      "Terraform",
      "Grafana",
      "Prometheus",
      "CI/CD",
      "Fastlane",
      "Keycloak",
    ],
  },
  {
    label: "growth",
    items: [
      "Technical SEO",
      "Google Search Console",
      "Google Analytics",
      "Google Tag Manager",
      "PostHog",
      "Marfeel",
      "Semrush",
    ],
  },
  {
    label: "lead",
    items: [
      "Engineering leadership",
      "System architecture & design",
      "Mentoring & onboarding",
      "Code quality & testing",
      "Technical writing",
    ],
  },
];

export type Recommendation = {
  quote: string;
  name: string;
  /** Their current role and employer, as on their LinkedIn profile. */
  role: string;
  company?: string;
  /** How they worked with Sunny (the past context of the recommendation). */
  relation: string;
  url?: string;
};

// Excerpts from LinkedIn recommendations (all 11 are on the profile).
export const recommendations: Recommendation[] = [
  {
    quote:
      "Whenever given the opportunity, Sunny delivered entire features from conception to deployment, showing a commitment to quality, an aptitude for leadership and an organised approach to work.",
    name: "Joe Corcoran",
    role: "CTO",
    company: "Latana",
    relation: "Senior colleague at Latana",
  },
  {
    quote:
      "A strong track record of delivering robust and high-impact web solutions. What sets Sunny apart is his diligence, friendliness, and readiness for challenges.",
    name: "Oleg Nikitashin",
    role: "Senior Product Engineer",
    company: "Fin",
    relation: "Managed Sunny directly at Latana",
  },
  {
    quote:
      "Vibrant UI with stable backend, Sunny will be my first call. He has very sound knowledge in his area, especially in Node.js and React.",
    name: "Rishi Kant Prasad",
    role: "VP, Software Engineering",
    company: "Citi",
    relation: "Worked together at Mastercard",
  },
  {
    quote:
      "A user-centric developer who genuinely cares about how our product addresses the day-to-day challenges faced by our user base, and an exceptional team player.",
    name: "Sabina Radziush",
    role: "Lead Product Manager",
    company: "Talon.One",
    relation: "Same product team at Latana",
  },
];

export type Credential = {
  title: string;
  issuer: string;
  year: string;
  url?: string;
  kind: "degree" | "certification" | "award";
};

// From LinkedIn. Add credential URLs ("Show credential" links) to make them verifiable.
export const credentials: Credential[] = [
  {
    kind: "degree",
    title:
      "Post Graduate Program in AI Agents for Business Applications (Grade A+)",
    issuer: "Texas McCombs School of Business",
    year: "2026",
  },
  {
    kind: "degree",
    title: "B.E., Electronics and Communication Engineering",
    issuer: "Birla Institute of Technology, Mesra",
    year: "2014",
  },
  {
    kind: "certification",
    title:
      "MongoDB skill badges for sharding, performance tuning, and security",
    issuer: "MongoDB via Credly",
    year: "2026",
    url: "https://www.credly.com/users/sunny-prakash.9b26faae/badges",
  },
  {
    kind: "award",
    title: "Top 10% in the Node.js assessment",
    issuer: "TestDome",
    year: "2025",
    url: "https://www.testdome.com/certificates/20e918ef0f85442694edc5f0d13bcf13",
  },
  {
    kind: "award",
    title: "Being Inclusive Award",
    issuer: "Mastercard",
    year: "2021",
  },
  {
    kind: "award",
    title: "Insta Award (×2)",
    issuer: "Infosys",
    year: "2019–20",
  },
];

export const spokenLanguages = [
  "English (full professional)",
  "German (limited working)",
];

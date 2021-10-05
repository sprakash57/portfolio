interface Language {
    name: string;
    id: string;
}

interface Repo {
    forkCount: number;
    name: string;
    url: string;
    stargazerCount: number;
    isPrivate: boolean;
    isFork: boolean;
    description: string;
    languages: { nodes: Language[] };
}

interface Skill {
    area: string;
    learning: number;
    techStack: string[];
}

interface Contribution {
    forkCount: number;
    stargazerCount: number;
    name: string;
    url: string;
    descriptionHTML: string;
    languages: { nodes: Language[] };
    owner: {
        avatarUrl: string;
        login: string;
    }
}

interface FrontMatter {
    id: number;
    publishedAt: string;
    slug: string;
    readTime: string;
    summary: string;
    title: string;
}

interface Project {
    id: number;
    title: string;
    platform: string;
    url: string;
    summary: string;
    image: string;
    technology: string[];
    pinned: boolean;
}

interface Post {
    id: number;
    title: string;
    publishedAt: string;
    summary: string;
    slug: string;
    readTime: string;
}

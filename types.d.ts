interface Language {
    name: string;
    id: string;
    color: string;
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
    isArchived: boolean;
    isPrivate: boolean;
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
    tags: string[];
}

interface Project {
    id: number;
    title: string;
    platforms: string[];
    url: string;
    summary: string;
    image: string;
    thumbnail: string;
}

interface Video {
    id: number;
    title: string;
    url: string;
    runtime: string;
}

interface Post {
    id: number;
    title: string;
    publishedAt: string;
    timestamp: number;
    summary: string;
    slug: string;
    readTime: string;
    tags: string[];
}

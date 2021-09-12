interface Language {
    name: string;
    id: string;
}

interface CardItem {
    id: number;
    title: string;
    summary: string;
    slug: string;
    publishedAt?: string;
    technology?: string[];
    platform?: string;
    url?: string;
    image?: string;
    pinned?: boolean;
}

interface ActivityDetail {
    forkCount: number;
    name: string;
    url: string;
    stargazerCount: number;
    isPrivate: boolean;
    isFork: boolean;
    description: string | null;
    languages: { nodes: Language[] };
    owner: { login: string };
    parent: ActivityDetail | null;
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
    languages: { nodes: Language[] };
    owner: {
        avatarUrl: string;
        login: string;
    }
}
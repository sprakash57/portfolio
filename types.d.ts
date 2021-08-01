interface CardItem {
    title: string;
    summary: string;
    slug: string;
    publishedAt?: string;
    technology?: string[];
    platform?: string;
    url?: string;
    image?: string;
}

interface ActivityDetail {
    forkCount: number;
    name: string;
    url: string;
    stargazerCount: number;
    isPrivate: boolean;
    isFork: boolean;
    description: string | null;
    languages: { nodes: { name: string }[] };
    owner: { login: string };
    parent: ActivityDetail | null;
}
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

interface Profile {
    avatarUrl: string;
    url: string;
    login: string;
}
interface ActivityDetail {
    forkCount: number;
    name: string;
    url: string;
    stargazerCount: number;
    isPrivate: boolean;
    description: string | null;
    languages: { nodes: { name: string }[] };
    owner: Profile;
    parent: ActivityDetail | null;
}
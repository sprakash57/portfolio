export const getPinned = (list: Project[]) => {
    return list.filter(item => item.pinned);
}

export const getLatest = (list: Post[], limit?: number) => {
    const sorted = list.sort((prev, next) => next.id - prev.id);
    if (limit) return sorted.slice(0, limit);
    return sorted;
}

export const classnames = (...args: any[]) => args.filter(arg => !!arg).join(" ");

export const inlineLink = (url: string, label: string) => `<a href=${url} target="_blank" rel="noopener noreferrer">${label}</a>`;

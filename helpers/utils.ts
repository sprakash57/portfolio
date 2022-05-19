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

export const numberOfViews = (views: number) => {
    const commaSeparated = String(views).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (views < 10000) return commaSeparated;
    const units = commaSeparated.split(",");
    const unitsWithComma = `${units[0]}.${units[1][0]}`;
    if (units.length < 3) return `${unitsWithComma}K`;
    if (units.length < 4) return `${unitsWithComma}M`;
    return `${unitsWithComma}B`;
}

export const capitalize = (str: string) => {
    const result = str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
    if (result === 'Npm-color') return 'Node library';
    if (result === 'Chrome') return 'Browser';
    return result;
};
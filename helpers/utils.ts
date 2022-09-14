import { ScreenSize } from './constants';

export const classnames = (...args: any[]) => args.filter((arg) => !!arg).join(' ');

export const inlineLink = (url: string, label: string) =>
  `<a href=${url} target="_blank" rel="noopener noreferrer">${label}</a>`;

export const numberOfViews = (views: number) => {
  const commaSeparated = String(views).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  if (views < 10000) return commaSeparated;
  const units = commaSeparated.split(',');
  const unitsWithComma = `${units[0]}.${units[1][0]}`;
  if (units.length < 3) return `${unitsWithComma}K`;
  if (units.length < 4) return `${unitsWithComma}M`;
  return `${unitsWithComma}B`;
};

export const concatEllipsis = (str: string, limit = 160) =>
  str.length >= limit ? str.substring(0, limit) + '...' : str;

export const encodeURI = (str: string) => (str ? encodeURIComponent(str) : '');

export const randomizer = (list: any[]) => {
  for (let revIdx = list.length - 1; revIdx >= 0; revIdx--) {
    const randomIdx = Math.floor(Math.random() * (revIdx + 1));
    [list[revIdx], list[randomIdx]] = [list[randomIdx], list[revIdx]];
    if (list.length > Math.min(list.length, 11)) break;
  }
  return list;
};

export const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const getScreenType = (width: number | null) => {
  if (width) {
    const { MOBILE, DESKTOP, TABLET } = ScreenSize;
    if (width <= 640) return MOBILE;
    if (width >= 1080) return DESKTOP;
    return TABLET;
  }
  return null;
};

export const capitalize = (text = '') => (text ? text.substring(0, 1).toUpperCase() + text.substring(1) : text);

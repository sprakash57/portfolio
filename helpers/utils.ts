import { CardItem } from "../types";

export const getTopThree = (list: CardItem[]) => {
    return list
        .sort((prev, next) => new Date(next.publishedAt).getTime() - new Date(prev.publishedAt).getTime())
        .slice(0, 3)
}
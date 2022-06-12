import { useEffect, useState, Dispatch, SetStateAction, useMemo } from "react";

const debounce = (cb: any, delay: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(cb, delay, ...args);
    }
}

export const useDebounce = <T>(value: T, delay: number): [T, T, any] => {
    const [inputValue, _setInputValue] = useState<T>(value);
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    const memoizedDebounce = useMemo(() => debounce((value: T) => {
        setDebouncedValue(value);
    }, delay), [delay])

    const setInputValue = (value: T) => {
        if (value instanceof Function) {
            _setInputValue((p) => {
                const mutated = value(p);
                memoizedDebounce(mutated);
                return mutated;
            });
        } else {
            _setInputValue(value);
            memoizedDebounce(value);
        }
    }

    return [inputValue, debouncedValue, setInputValue];
};

export const useLatestData = <T>(list: any[], options: { limit?: number, orderType?: string } = { limit: 3, orderType: 'desc' }): T[] => {
    const data = useMemo(() => {
        const { limit = 3, orderType = 'desc' } = options;
        let sorted = [] as T[];
        if (Array.isArray(list)) {
            if (orderType === 'asc') {
                sorted = list.sort((prev, next) => prev.id - next.id).slice(0, limit);
            } else {
                sorted = list.sort((prev, next) => next.id - prev.id).slice(0, limit);
            }
        }
        return sorted;
    }, [list, options]);

    return data;
};

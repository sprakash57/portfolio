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

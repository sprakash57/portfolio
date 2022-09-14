import { useEffect, useState, useMemo, useRef } from 'react';
import { ScreenSize } from './constants';
import { getScreenType } from './utils';

const debounce = (cb: any, delay: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(cb, delay, ...args);
  };
};

export const useDebounce = <T>(value: T, delay: number): [T, T, any] => {
  const [inputValue, _setInputValue] = useState<T>(value);
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  const memoizedDebounce = useMemo(
    () =>
      debounce((value: T) => {
        setDebouncedValue(value);
      }, delay),
    [delay]
  );

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
  };

  return [inputValue, debouncedValue, setInputValue];
};

export const useLatestData = <T>(
  list: any[],
  options: { limit?: number; orderType?: string } = { limit: 3, orderType: 'desc' }
): T[] => {
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

export const useHandleClickOutside = (callback: () => void) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      if (nodeRef?.current && !nodeRef.current.contains(e.target as HTMLDivElement)) {
        callback();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [callback]);

  return nodeRef;
};

export const useScrollToTop = (): [boolean, () => void] => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const scrollEvent = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', scrollEvent);
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, []);
  return [showTop, () => window.scrollTo({ top: 0, behavior: 'smooth' })];
};

export const useScreenDimension = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  const hasWindow = typeof window !== 'undefined';

  const getWidth = () => (hasWindow ? window.innerWidth : windowWidth);

  const handleResize = () => setWindowWidth(getWidth());

  useEffect(() => {
    if (hasWindow) {
      setWindowWidth(getWidth());

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return { type: getScreenType(windowWidth), width: windowWidth };
};

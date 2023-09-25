import { useState, useEffect } from 'react';

export const useClipboard = (ref: React.RefObject<HTMLSpanElement>) => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(ref.current ? ref.current.innerText : '');
    setHasCopied(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setHasCopied(false), 700);
    return () => clearTimeout(timeout);
  }, [hasCopied]);

  return { hasCopied, copyToClipboard };
};

export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
): [value: T, setValue: React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

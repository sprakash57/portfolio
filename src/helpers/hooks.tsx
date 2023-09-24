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

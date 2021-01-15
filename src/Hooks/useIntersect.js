import { useRef, useEffect, useState } from 'react';

function useIntersectionObserver({
  elementRef,
  threshold = 0.1,
  root = null,
  rootMargin = '0%',
}) {
  const observer = useRef(null);
  const [entry, setEntry] = useState();
  const isClient = typeof window !== `undefined`;
  const hasIOSupport = isClient && !!window.IntersectionObserver;
  const noUpdate = entry?.isIntersecting;

  const updateEntry = ([entry]) => {
    setEntry(entry);
  };
  useEffect(() => {
    const node = elementRef?.current;
    if (!hasIOSupport || noUpdate || !node) {
      return;
    }

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(updateEntry, {
      threshold,
      root,
      rootMargin,
    });

    const { current: currentObserver } = observer;
    currentObserver.observe(node);

    return () => {
      currentObserver.disconnect();
    };
  }, [elementRef, threshold, root, rootMargin, noUpdate, hasIOSupport]);

  return [!!entry?.isIntersecting, entry];
}
export default useIntersectionObserver;

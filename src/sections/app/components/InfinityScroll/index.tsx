import { useCallback, useEffect, useRef } from 'react';

import styles from './InfinityScroll.module.scss';

interface IProps {
  onReachEnd: () => void;
  isLoading: boolean;
}

const InfinityScroll = ({ onReachEnd, isLoading }: IProps) => {
  const loader = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting) {
        onReachEnd();
      }
    },
    [onReachEnd],
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '100px',
      threshold: 0,
    };
    const observer = new window.IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);

    return () => {
      observer.disconnect();
    };
  }, [handleObserver]);

  return (
    <>
      <div ref={loader} />
      {isLoading && (
        <div className={styles.wrapper} role="spinbutton">
          <div className={styles.loader}></div>
        </div>
      )}
    </>
  );
};

export default InfinityScroll;

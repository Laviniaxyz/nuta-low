import React, { useEffect, useMemo, useState } from 'react';
import { WindowSizeContext } from './context';

const getWindowSize = () => {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
};

const WindowSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const value = useMemo(
    () => ({
      windowSize,
    }),
    [windowSize],
  );

  return <WindowSizeContext.Provider value={value}>{children}</WindowSizeContext.Provider>;
};

export default WindowSizeProvider;

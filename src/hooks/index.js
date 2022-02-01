import { useLayoutEffect, useState } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

function useWindowScroll() {
  const [scroll, setScroll] = useState(0);
  useLayoutEffect(() => {
    const updateScroll = () => setScroll(window.pageYOffset);
    window.addEventListener('scroll', updateScroll);
    updateScroll();
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  return scroll;
}

export { useWindowSize, useWindowScroll };

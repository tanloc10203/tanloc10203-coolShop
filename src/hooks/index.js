import { useEffect, useLayoutEffect, useState } from 'react';

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

function useGetBase64Img(files) {
  const [base64, setBase64] = useState([]);

  useEffect(() => {
    const getBaseFile = (file) => {
      if (file) {
        const reader = new FileReader();
        let objURL = URL.createObjectURL(file);
        reader.readAsDataURL(file);
        reader.onload = () => {
          setBase64([objURL, reader.result]);
        };
      }
    };
    getBaseFile(files);
  }, [files]);

  return base64;
}

export { useWindowSize, useWindowScroll, useGetBase64Img };


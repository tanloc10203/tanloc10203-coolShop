import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import styles from './ImgRender.module.scss';
import { useIntersection } from './IntersectionObserver';

function ImgRender({ url, thumb, width, height, maxWidth }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();
  const imgLoadRef = useRef();
  useIntersection(imgRef, () => {
    setIsInView(true);
  });

  const handleOnLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={styles.imageContainer}
      ref={imgRef}
      style={{
        paddingBottom: width && height && `${(height / width) * 100}%`,
        width: '100%',
        maxWidth: maxWidth,
      }}
    >
      {isInView && (
        <>
          <img
            className={clsx(styles.image, styles.thumb, {
              [styles.isLoaded]: !!isLoaded,
            })}
            ref={imgLoadRef}
            src={thumb}
            alt=""
          />
          <img
            className={clsx(styles.image, {
              [styles.isLoaded]: !!isLoaded,
            })}
            ref={imgLoadRef}
            src={url}
            onLoad={handleOnLoad}
            alt=""
          />
        </>
      )}
    </div>
  );
}

ImgRender.propTypes = {};

export default ImgRender;

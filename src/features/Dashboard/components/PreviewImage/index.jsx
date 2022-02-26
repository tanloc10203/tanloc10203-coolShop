import { useGetBase64Img } from 'hooks';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import styles from './PreviewImage.module.scss';

function PreviewImage({ files, imgURL }) {
  const [isOpen, setIsOpen] = useState(false);
  const [objURL, base64] = useGetBase64Img(files && files);

  return (
    <div>
      <img
        src={files ? base64 : imgURL}
        alt={files ? base64 : imgURL}
        className={styles.imagePreview}
        onClick={() => (files || imgURL ? setIsOpen(true) : null)}
      />

      {isOpen && (
        <Lightbox mainSrc={files ? objURL : imgURL} onCloseRequest={() => setIsOpen(false)} />
      )}
    </div>
  );
}

PreviewImage.propTypes = {
  files: PropTypes.object,
};

export default PreviewImage;

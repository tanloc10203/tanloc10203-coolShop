import { useGetBase64Img } from 'hooks';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import styles from './PreviewImage.module.scss';

function PreviewImage({ files }) {
  const [isOpen, setIsOpen] = useState(false);
  const [objURL, base64] = useGetBase64Img(files);

  return (
    <div>
      <img
        src={base64 && base64}
        alt={base64 && base64}
        className={styles.imagePreview}
        onClick={() => files && setIsOpen(true)}
      />

      {isOpen && <Lightbox mainSrc={objURL && objURL} onCloseRequest={() => setIsOpen(false)} />}
    </div>
  );
}

PreviewImage.propTypes = {
  files: PropTypes.object.isRequired,
};

export default PreviewImage;

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Lightbox from 'react-image-lightbox';
import styles from './PreviewImage.module.scss';

function PreviewImage({ files }) {
  const [previewImage, setPreviewImage] = useState(null);
  const [previewImageURL, setPreviewImageURL] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getBaseFile = (file) => {
      if (file) {
        const reader = new FileReader();
        let objURL = URL.createObjectURL(file);
        reader.readAsDataURL(file);
        setPreviewImageURL(objURL);
        reader.onload = () => {
          setPreviewImage(reader.result);
        };
      }
    };
    getBaseFile(files);
  }, [files]);

  return (
    <div>
      <img
        src={previewImage}
        alt={previewImage}
        className={styles.imagePreview}
        onClick={() => files && setIsOpen(true)}
      />

      {isOpen && <Lightbox mainSrc={previewImageURL} onCloseRequest={() => setIsOpen(false)} />}
    </div>
  );
}

PreviewImage.propTypes = {
  files: PropTypes.object.isRequired,
};

export default PreviewImage;

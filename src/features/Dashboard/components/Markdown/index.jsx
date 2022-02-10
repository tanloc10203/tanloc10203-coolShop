import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react';
import { axios } from '../../../../apis';
import { PropTypes } from 'prop-types';

const url = process.env.REACT_APP_API_URL;
const URL_IMG = process.env.REACT_APP_URL_IMG;

function Markdown({ value, onChangeValueInput }) {
  const uploadAdapter = (loader) => {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          loader.file.then(async (file) => {
            try {
              const formData = new FormData();
              formData.append('files', file);
              const response = await axios.post(`${url}admin/upload`, formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              });
              resolve({
                default: `${URL_IMG}${response.filename}`,
              });
            } catch (error) {
              reject(error);
            }
          });
        });
      },
    };
  };

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div className="App">
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={onChangeValueInput}
        config={{
          extraPlugins: [uploadPlugin],
        }}
      />
    </div>
  );
}

Markdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeValueInput: PropTypes.func.isRequired,
};

export default Markdown;

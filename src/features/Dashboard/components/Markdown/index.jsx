import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import React, { useState } from 'react';
import { axios } from '../../../../apis';

const url = process.env.REACT_APP_API_URL;
const URL_IMG = process.env.REACT_APP_URL_IMG;

function Markdown(props) {
  const [value, setValue] = useState('');

  function uploadAdapter(loader) {
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
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
        config={{
          extraPlugins: [uploadPlugin],
        }}
      />
    </div>
  );
}

Markdown.propTypes = {};

export default Markdown;

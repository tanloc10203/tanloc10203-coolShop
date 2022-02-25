export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-GB').format(Date.parse(date));
};

export const cutTextReplacement = (text = '', length) => {
  let replace = null;
  if (text && text.length >= length) {
    replace = text.replace(text.slice(length, text.length), '...');
    // console.log({relative: text.slice(length, text.length), length: text.length, text: text, replace: replace});
  } else replace = text;

  return replace;
};

export const getBase64 = (files) => {
  return new Promise((resolve, reject) => {
    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files);
      let objURL = URL.createObjectURL(files);
      reader.onload = () => {
        resolve([objURL, reader.result]);
      };
      reader.onerror = () => reject();
    }
  });
};

export const formatPrice = (price = 0) => {
  return (price = price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
};

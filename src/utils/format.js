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

export const formatPrice = (price = 0) => {
  return (price = price?.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }));
};

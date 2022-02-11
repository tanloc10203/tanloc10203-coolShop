import React from 'react';
import NumberFormat from 'react-number-format';

function FormatNumberInput(props) {
  return (
    <NumberFormat
      placeholder="Number Format Input looses focus"
      isNumericString={true}
      thousandSeparator={true}
      {...props}
    />
  );
}

FormatNumberInput.propTypes = {};

export default FormatNumberInput;

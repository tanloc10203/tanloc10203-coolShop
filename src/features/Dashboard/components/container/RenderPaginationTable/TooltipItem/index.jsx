import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

function TooltipItem({ item, target }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => {
    setTooltipOpen(!tooltipOpen);
  };

  return (
    <span>
      <Tooltip placement="auto" isOpen={tooltipOpen} target={target} toggle={toggle}>
        {item.text}
      </Tooltip>
    </span>
  );
}

TooltipItem.propTypes = {
  item: PropTypes.object.isRequired,
  target: PropTypes.string.isRequired,
};

export default TooltipItem;

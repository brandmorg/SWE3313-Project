import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Button = ({label, style, size, clickHandler}) => {
  return (
    <button
      className={`btn btn-#{style} btn-#{size}`}
      onClick={clickHandler}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Button;

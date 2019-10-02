/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => (
  <button type="submit" onClick={props.onClick}>
    {props.children}
  </button>
);

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;

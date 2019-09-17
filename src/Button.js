import React from "react";
import PropTypes from "prop-types";

const Button = (Props) => (
  <button onClick={props.onClick}>
    {props.children}
  </button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;

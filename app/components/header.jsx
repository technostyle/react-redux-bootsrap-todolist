import React from "react";
import PropTypes from "prop-types";

export const TYPES = {
  SMALL: "h4",
  MEDIUM: "h3",
  BIG: "h2",
  LARGE: "h1"
};

export const Header = ({ type, text }) =>
  React.createElement(type || TYPES.LARGE, null, text);

Header.propTypes = {
  type: PropTypes.oneOf([TYPES.SMALL, TYPES.MEDIUM, TYPES.BIG, TYPES.LARGE])
};

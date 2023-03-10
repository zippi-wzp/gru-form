import React from "react";
import PropTypes from "prop-types";

function LayoutContainer(props) {
  const { children } = props;
  return <div className="container">{children}</div>;
}

LayoutContainer.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default LayoutContainer;

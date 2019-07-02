import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
function ActionButton(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0">
      ✗
    </span>
  );
}

export default ActionButton;

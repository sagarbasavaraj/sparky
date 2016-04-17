import React, {PropTypes} from 'react';

const Button = ({icon, label, onClick}) => {
  let iconElement = false;

  if (icon) {
    iconElement = <span className="button icon">{icon}</span>;
  }

  return (
    <div className="sparky button" onClick={onClick}>
      {iconElement}
      <span className="label">{label}</span>
    </div>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export {Button};

import React, {PropTypes} from 'react';
import type {ButtonProps} from './button.types';

const resolveClickHandler = (handler, toggleEnabled, toggled) => {
  if (toggleEnabled) {
    // ({type, target, currentTarget}) => {
    return ({type}) => {
      // handler({type, toggled: false, target, currentTarget});
      handler({type, toggled: !toggled});
    };
  }
  // ({type, target, currentTarget}) => {
  return ({type}) => {
    // const {type, target, currentTarget} = event;
    // handler({type, target, currentTarget});
    handler({type});
  };
};

const Button = ({label, onClick, toggle, toggled}: ButtonProps) => {
  // let iconElement = false;
  let clickHandler = resolveClickHandler(onClick, toggle, toggled);
  const className = toggled ? 'sparky toggled button' : 'sparky button';

  return (
    <div className={className} onClick={clickHandler}>
      <span className="label">{label}</span>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
  toggle: PropTypes.bool,
  toggled: PropTypes.bool,
};

Button.defaultProps = {
  icon: null,
  toggle: false,
  toggled: false,
};

export {Button};

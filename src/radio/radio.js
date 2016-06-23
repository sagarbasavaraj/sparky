import React, {PropTypes} from 'react';

const Radio = ({name, value, checked, onChange}) => (<label>
              <input type="radio"
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
              />
              {value}
            </label>);

Radio.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Radio;

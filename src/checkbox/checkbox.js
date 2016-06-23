import React, {PropTypes} from 'react';

const Checkbox = ({name, value, checked, onChange}) => (<label>
              <input type="checkbox"
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
              />
              {value}
            </label>);

Checkbox.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;

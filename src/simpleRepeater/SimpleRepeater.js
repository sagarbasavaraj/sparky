import {PropTypes, cloneElement} from 'react';

const SimpleRepeater = ({className, data, parent, child}) => {
  const renderComponent = () => (
      data.map((eachData) => {
        if (typeof(eachData) === 'object') {
          return cloneElement(child, eachData);
        }
        return cloneElement(child, {children: eachData});
      })
    );
  return (
      cloneElement(parent, {children: renderComponent()})
  );
};

SimpleRepeater.propTypes = {
  className: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  parent: PropTypes.element.isRequired,
  child: PropTypes.any.isRequired,
};

export default SimpleRepeater;

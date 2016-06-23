import {PropTypes, Children, cloneElement} from 'react';

const renderItem = (item) => (child) => cloneElement(item, child.props);

const Repeater = ({children, parent, item}) => (
  cloneElement(parent, {children: Children.map(children, renderItem(item))})
);

Repeater.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  parent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  item: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

export default Repeater;

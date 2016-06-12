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
  parent: PropTypes.element.isRequired,
  item: PropTypes.element.isRequired,
};

export default Repeater;

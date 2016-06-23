import React, {PropTypes} from 'react';

/*
 * Listitem component.
*/
const ListItem = ({className, children}) => (<li className={className}>{children}</li>);

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default ListItem;

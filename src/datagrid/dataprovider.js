// /* @flow */
// import {Element} from 'react';
// import Immutable from 'seamless-immutable';
//
// type ColumnHeaderData = string | Object;
// type ColumnHeaderLabelResolver<D, C> = (data: D) => C;
// type ColumnHeaderLabel = ColumnHeaderData | ColumnHeaderLabelResolver;
//
// type ColumnHeader = {
//   label: ColumnHeaderLabel,
// };
//
// const onlyColumns = (element: Element) => element && element.type === 'column';
// const parseColumn = ({props: {field, renderer, sortable, label, options}}: Element) => ({
//   field,
//   renderer,
//   sortable,
//   label,
//   options,
// });
//
// export const processColumnHeaders = (children: Array<Element>): Array<ColumnHeader> => {
//   if (!children && !children.length) {
//     throw new Error('processColumnHeaders: Invalid Column Headers');
//   }
//
//   Immutable(children
//     .filter(onlyColumns)
//     .map(parseColumn)
//   );
//
//   return [1, 2, 3];
// };
//
// export const isNumber = (test: string): boolean => {
//   if (test) {
//     return 'yes';
//   }
//   return 'no';
// };

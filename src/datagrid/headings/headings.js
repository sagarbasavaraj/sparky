import React, {PropTypes} from 'react';
import {Header} from '../renderers';

const resolveHeaderRenderer = (data) => {
  // TODO: This function should resolve renderers, and allow customisable renderers.
  if (!data) {
    throw new Error('DataGrid:Headings:resolveHeaerRenderer invalid data');
  }
  return Header;
};

const Headings = ({headingsData}) => {
  if (!headingsData) {
    throw new Error('DataGrid:Headings invalid headersData provided');
  }

  return (
    <div className="datagrid headings">
      {headingsData.map((data) => {
        const Comp = resolveHeaderRenderer(data);
        return <Comp headerData={data} />;
      })}
    </div>
  );
};

Headings.propTypes = {
  headingsData: PropTypes.array.isRequired,
};

export {Headings};

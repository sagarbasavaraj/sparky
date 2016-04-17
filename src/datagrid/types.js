type GridDataProvider = Array<Object>;

export type DataGridState = {
  gridDataProvider: GridDataProvider,
};

export type DataGridProps = {
  dataProvider: Array<Object>,
  children: Array<Element>,
};

export type DataGridDefaultProps = {
  dataProvider: Array<Object>,
  children: Array<Element>,
};

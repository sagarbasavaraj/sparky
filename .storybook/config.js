import {configure} from '@kadira/storybook';

function loadStories() {
  require('../src/main.story');
  // Button
  require('../src/button/index');
  require('../src/button/button.story');

  // Datagrid
  require('../src/datagrid/renderers/index');
  require('../src/datagrid/renderers/header.story');
  require('../src/datagrid/headings/index');
  require('../src/datagrid/headings/headings.story');
  require('../src/datagrid/index')
  require('../src/datagrid/datagrid.story');
}

configure(loadStories, module);

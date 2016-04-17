import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/main.story');
  require('../src/datagrid/renderers/header.story');
  // require('')
  // require('../components/stories/button');
  // require as many as stories you need.
}

configure(loadStories, module);

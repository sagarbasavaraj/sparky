import {configure} from '@kadira/storybook';

function loadStories() {
  require('../src/repeater/repeater.story');
}

configure(loadStories, module);

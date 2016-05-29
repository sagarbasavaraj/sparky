// import React, {Component} from 'react';
// import {Button} from './button';
// import {storiesOf, action} from '@kadira/storybook';

// storiesOf('Button', module)
//   .add('Button with label only', () => (
//     <Button label="Label Only" onClick={action('Button Clicked!')} />
//   ))
//   .add('Button with label and icon', () => (
//     <Button label="Label & Icon" onClick={action('Button Clicked!')} />
//   ))
//   .add('Toggle Button', () => <ToggleButtonStory />);

// class ToggleButtonStory extends Component {
//   constructor() {
//     super();
//     this.state = {toggled: false};
//   }

//   toggle(event) {
//     this.setState({toggled: event.toggled});
//   }

//   render() {
//     const {toggled} = this.state;

//     return (
//       <div>
//         <Button label="Always off" toggle onClick={action('Always off')} />
//         <Button label="Always on" toggle toggled onClick={action('Always off')} />
//         <Button label={toggled ? 'On' : 'Off'} toggle toggled={toggled} onClick={::this.toggle} />
//       </div>
//     );
//   }
// }

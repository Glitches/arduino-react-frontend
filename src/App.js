import React, { Component } from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Input,
  List,
  Segment
} from 'semantic-ui-react';
import * as action from './actions/index.js';
import { connect } from 'react-redux';

import { CustomMessage, Navbar } from 'components';
import 'styling/semantic.less';

const leftItems = [
  {
    as: 'a',
    content: 'Documentation',
    href: 'https://react.semantic-ui.com/',
    icon: 'book',
    key: 'docs',
    target: '_blank'
  }
];
const rightItems = [
  {
    as: 'a',
    content: 'Frontend Repository',
    href: 'https://github.com/glitches/arduino-react-frontend',
    icon: 'github',
    key: 'frontend_github',
    target: '_blank'
  },
  {
    as: 'a',
    content: 'Backend Repository',
    icon: 'github',
    href: 'https://github.com/glitches/arduino-backend',
    key: 'backend_github',
    target: '_blank'
  }
];

class App extends Component {
  state = {};

  callFade = () => {
    const { fade_millisec } = this.props.arduino;
    this.props.fadeLed(fade_millisec);
  };

  callStrobe = () => {
    const { strobe_endpoint } = this.props.arduino;
    console.log(strobe_endpoint);
    this.props.strobeLed(strobe_endpoint);
    this.props.strobeOn();
  };

  setFadeTime = (e, data) => {
    //    console.log('event', e.target);
    e.preventDefault();
    this.props.fadeTime(data.value);
  };

  render() {
    const { strobe_on } = this.props.arduino;
    return (
      <Navbar leftItems={leftItems} rightItems={rightItems}>
        <Segment>
          <Header as="h1">Arduino Commander</Header>

          <Grid>
            <Grid.Column computer={6} mobile={16}>
              <Header as="h3">Fade time (ms)</Header>
              <Input focus placeholder="Time" onChange={this.setFadeTime} />
            </Grid.Column>
            <Grid.Column computer={10} mobile={16}>
              <Header as="h3">
                Click the <code>Button</code> to fade
              </Header>
              <Button onClick={this.callFade}>Fade LED</Button>
              <Button
                onClick={this.callStrobe}
                color={strobe_on ? 'red' : 'grey'}
              >
                Strobe LED
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
      </Navbar>
    );
  }
}
const mapStateToProps = state => ({
  arduino: state.arduino
});

const mapDispatchToProps = dispatch => ({
  fadeLed: fadeTime => dispatch(action.fadeLed(fadeTime)),
  fadeTime: millisec => dispatch(action.fadeTime(millisec)),
  strobeLed: strobe_endpoint => dispatch(action.strobeLed(strobe_endpoint)),
  strobeOn: () => dispatch(action.strobeOn())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

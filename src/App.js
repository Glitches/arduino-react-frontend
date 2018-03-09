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
    this.props.fadeLed();
  };

  setFadeTime = (e, data) => {
    //    console.log('event', e.target);
    e.preventDefault();
    console.log('data', data);
    this.props.fadeTime(data.value);
  };

  render() {
    return (
      <Navbar leftItems={leftItems} rightItems={rightItems}>
        <Segment>
          <Header as="h1">Arduino Commander</Header>

          <Grid>
            <Grid.Column computer={6} mobile={16}>
              <Input focus placeholder="Time" onChange={this.setFadeTime} />
              <Form>
                <Form.Field>
                  <label>Fade Time</label>
                  <input placeholder="Fade Time" onChange={this.setFadeTime} />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column computer={10} mobile={16}>
              <Header as="h3">
                Click the <code>Button</code> to fade
              </Header>
              <Button primary>Primary Button</Button>
              <Button onClick={() => this.callFade()}>Fade LED</Button>

              <Header as="h3">Custom themed component</Header>
              <p>
                In the real world you will always need custom components, and
                you will want to get them themed like your app. An example is
                below:
              </p>

              <CustomMessage>Hey, it is a custom message</CustomMessage>

              <p>
                Take a look <code>/src/components/CustomMessage</code>{' '}
                directory. The are some important things:
              </p>
              <List bulleted>
                <List.Item>
                  we premade <code>heading.less</code> for you, when you will
                  include it in your LESS file you will able to use your
                  existing SUI variables!
                </List.Item>
                <List.Item>
                  we enabled{' '}
                  <a
                    href="https://github.com/css-modules/css-modules"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    CSS modules
                  </a>{' '}
                  for your components, it means that you will need to use{' '}
                  <code>:global</code> when your style will match SUI parts
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Segment>
      </Navbar>
    );
  }
}
const mapStateToProps = state => ({
  time: state.time
});

const mapDispatchToProps = dispatch => ({
  fadeLed: () => dispatch(action.fadeLed()),
  fadeTime: millisec => dispatch(action.fadeTime(millisec))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

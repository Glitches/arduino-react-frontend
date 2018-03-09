import React, { Component } from 'react';
import { Button, Grid, Header, List, Segment } from 'semantic-ui-react';
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
    console.log('here');
    this.props.fadeLed();
  };

  render() {
    return (
      <Navbar leftItems={leftItems} rightItems={rightItems}>
        <Segment>
          <Header as="h1">Arduino Commander</Header>

          <Grid>
            <Grid.Column computer={6} mobile={16}>
              <p>
                Welcome to your Semantic UI React App! It is awesome{' '}
                <span aria-label="emoji" role="img">
                  😉
                </span>
              </p>
            </Grid.Column>
            <Grid.Column computer={10} mobile={16}>
              <Header as="h3">
                Themed <code>Button</code>
              </Header>
              <p>
                Semantic UI React does not have own theming and fully relies on
                CSS part of Semantic UI. It is normal, Semantic UI theming is
                very powerful, it allows you fully modify the look of your app
                using theming variables.
              </p>
              <p>
                We changed the <code>primary</code> color of <code>Button</code>{' '}
                component, it is really easy
                <span aria-label="emoji" role="img">
                  😁
                </span>{' '}
                Take a look to{' '}
                <code>/src/styling/theme/elements/button.variables</code>. By
                the way, the <code>theme</code> directory structure fully
                matches the component structure of Semantic UI React.
              </p>
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
  fadedLed: state.fade
});

const mapDispatchToProps = dispatch => ({
  fadeLed: () => dispatch(action.fadeLed())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

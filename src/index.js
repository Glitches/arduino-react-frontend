import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// let store = createStore();

const render = Component => {
  ReactDOM.render(
    // <Provider store={store}>
    <AppContainer>
      <Component />
    </AppContainer>,
    // </Provider>,
    document.getElementById('root')
  );
};

render(App);
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}

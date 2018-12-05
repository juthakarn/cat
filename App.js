import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk'
import Router from './Router/router'
import reducers from './reducers'

const createStoreAndapplyMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreAndapplyMiddleware(reducers)
const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
export default App
// export default class App extends React.Component {
//   render() {
//     return (
//       <Router />
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

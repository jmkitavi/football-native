import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import RootNavigator from './components/Navigator'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}

export default App

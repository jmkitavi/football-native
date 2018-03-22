import React, { Component } from 'react'
import { View } from 'react-native'
import RootNavigator from './components/Navigator'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <RootNavigator />
    )
  }
}

export default App

import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import AppNavBar from './navbar/AppNavBar.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <AppNavBar/>
      </div>
    )
  }
}

export default hot(module)(App)

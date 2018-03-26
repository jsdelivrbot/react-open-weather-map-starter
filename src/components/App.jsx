import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import AppNavBar from './navbar/AppNavBar.jsx'
import HomePage from './home/HomePage.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <AppNavBar/>
        <HomePage/>
      </div>
    )
  }
}

export default hot(module)(App)

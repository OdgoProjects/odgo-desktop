import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './Reset.css'
import Home from './Components/Home/Home'
import Answer from './Components/Answer/Answer'
import Error from './Components/Error/Error'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/answer' component={ Answer } />
          <Route component={ Error } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

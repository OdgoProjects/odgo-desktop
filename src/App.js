import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './Reset.css'
import Home from './Components/Home/Home'
import Answer from './Components/Answer/Answer'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component={ Home } />
        <Route path='/answer' component={ Answer } />
      </BrowserRouter>
    );
  }
}

export default App;

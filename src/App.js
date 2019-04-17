import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './Reset.css'
import Error from './Components/Error/Error'
import Home from './Components/Home/Home'
import Moradia from './Components/Moradia/Moradia'
import Saude from './Components/Saude/Saude'
import PrimeirosPassos from './Components/Primeiros-Passos/PrimeirosPassos'
import Oportunidades from './Components/Oportunidades/Oportunidades'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/moradia' component={ Moradia } />
          <Route path='/saude' component={ Saude } />
          <Route path='/primeiros-passos' component={ PrimeirosPassos } />
          <Route path='/oportunidades' component={ Oportunidades } />
          <Route component={ Error } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;

import React, { Component } from 'react'

import './Reset.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import FaqItems from './Components/FaqArea/FaqItems'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FaqItems />
        <Footer />
      </div>
    );
  }
}

export default App;

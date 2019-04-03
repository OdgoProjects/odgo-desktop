import React, { Component } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FaqItems from '../FaqArea/FaqItems'

class Home extends Component {
  render() {
    return (
        <div>
            <Header />
            <FaqItems />
            <Footer />
        </div>
    )
  }
}

export default Home

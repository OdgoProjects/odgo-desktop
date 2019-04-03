import React, { Component } from 'react'

import Header from '../../Components/Home/Header/Header'
import Footer from '../../Components/Home/Footer/Footer'
import FaqItems from '../../Components/Home/FaqArea/FaqItems'

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

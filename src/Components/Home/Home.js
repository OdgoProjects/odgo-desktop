import React, { Component } from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import FaqItems from './FAQArea/FAQItems'
import SendQuestion from './SendQuestion/SendQuestion';

class Home extends Component {
  render() {
    return (
        <div>
            <Header />
            <FaqItems />
            <SendQuestion />
            <Footer />
        </div>
    )
  }
}

export default Home

import React, { Component } from 'react'

import Header from '../../Components/Home/Header/Header'
import Footer from '../../Components/Home/Footer/Footer'
import FaqItems from '../../Components/Home/FAQArea/FAQItems'
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

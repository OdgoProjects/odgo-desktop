import React, { Component } from 'react'

import Header from './Header/Header';
import Footer from './Footer/Footer'
import AnswerArea from './AnswerArea/AnswerArea';

class Oportunidades extends Component {
    render() {
        return(
            <div className="oportunidades">
                <Header />
                <AnswerArea />
                <Footer />
            </div>
        )
    }
}

export default Oportunidades
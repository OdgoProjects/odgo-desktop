import React, { Component } from 'react'

import Header from './Header/Header';
import Footer from './Footer/Footer'
import AnswerArea from './AnswerArea/AnswerArea';

class Saude extends Component {
    render() {
        return(
            <div className="saude">
                <Header />
                <AnswerArea />
                <Footer />
            </div>
        )
    }
}

export default Saude
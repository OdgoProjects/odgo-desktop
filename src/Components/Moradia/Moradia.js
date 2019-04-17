import React, { Component } from 'react'

import Header from './Header/Header';
import Footer from './Footer/Footer'
import AnswerArea from './AnswerArea/AnswerArea';

class Moradia extends Component {
    render() {
        return(
            <div className="moradia">
                <Header />
                <AnswerArea />
                <Footer />
            </div>
        )
    }
}

export default Moradia
import React, { Component } from 'react'

import Header from './Header/Header';
import Footer from './Footer/Footer'
import AnswerArea from './AnswerArea/AnswerArea';

class Answer extends Component {
    render() {
        return(
            <div className="answer">
                <Header />
                <AnswerArea />
                <Footer />
            </div>
        )
    }
}

export default Answer
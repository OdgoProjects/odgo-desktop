import React, { Component } from 'react'

import Header from './Header/Header';
import Footer from './Footer/Footer'
import AnswerArea from './AnswerArea/AnswerArea';

class Documentacao extends Component {
    render() {
        return(
            <div className="documentacao">
                <Header />
                <AnswerArea />
                <Footer />
            </div>
        )
    }
}

export default Documentacao
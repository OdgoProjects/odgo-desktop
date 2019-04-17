import React, { Component } from 'react'

import Header from './Header/Header';
import Footer from './Footer/Footer'
import AnswerArea from './AnswerArea/AnswerArea';

class PrimeirosPassos extends Component {
    render() {
        return(
            <div className="primeiros-passos">
                <Header />
                <AnswerArea />
                <Footer />
            </div>
        )
    }
}

export default PrimeirosPassos
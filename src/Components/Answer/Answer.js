import React, { Component } from 'react'

import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Answer.css'

class Answer extends Component {
    render() {
        return(
            <div className="answer">
                <Header />
                <h1>CONTEÚDO DA RESPOSTA</h1>
                <Footer />
            </div>
        )
    }
}

export default Answer
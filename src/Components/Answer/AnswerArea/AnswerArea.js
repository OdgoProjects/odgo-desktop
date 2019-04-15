import React, { Component } from 'react'

import './AnswerArea.css'
import '../ArticleIsGood/ArticleIsGood'
import ArticleIsGood from '../ArticleIsGood/ArticleIsGood';

class AnswerArea extends Component {
    render() {
        return(
            <div className="answer-blocks">
                <div className="answer-block-left">
                    <p>
                    Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Quem manda na minha terra sou euzis! Si num tem leite então bota uma pinga aí cumpadi!
                    </p>
                    <ArticleIsGood />
                </div>
                <div className="answer-block-right">
                    yyyyyyyyyy
                </div>
            </div>
        )
    }
}

export default AnswerArea
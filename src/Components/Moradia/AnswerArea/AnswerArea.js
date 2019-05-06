import React, { Component } from 'react'

import './AnswerArea.css'
import ArticleIsGood from '../../Article-Is-Good/ArticleIsGood';
import QuestionBox from '../../Question-Box/QuestionBox';

class AnswerArea extends Component {
    render() {
        return(
            <div className="answer-blocks">
                <div className="answer-block-left">
                    <p id="your-question">
                        Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis! 
                    </p>
                    <p id='your-answer'>
                        Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Quem manda na minha terra sou euzis! Si num tem leite então bota uma pinga aí cumpadi!
                        Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Quem manda na minha terra sou euzis! Si num tem leite então bota uma pinga aí cumpadi!
                        Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Quem manda na minha terra sou euzis! Si num tem leite então bota uma pinga aí cumpadi!
                        Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Diuretics paradis num copo é motivis de denguis. Quem manda na minha terra sou euzis! Si num tem leite então bota uma pinga aí cumpadi!
                    </p>
                    <ArticleIsGood />
                </div>
                <div className="answer-block-right">
                    <QuestionBox />
                </div>
            </div>
        )
    }
}

export default AnswerArea
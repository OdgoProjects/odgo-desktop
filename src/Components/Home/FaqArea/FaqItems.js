import React, { Component } from 'react'

import './FAQItems.css'
import documentacaoIcon from '../../../Img/documentacao-icon.svg'

class FaqItems extends Component {
    render(){
        return(
            <div>
                <div className="question-container">
                    <p>Perguntas Frequentes</p>
                </div>
                <div className="faq-box">
                    <div className="box-1">
                        <div className="faq-items">
                            <div className="inside-items">
                                <img src={ documentacaoIcon } alt="link para documentação" width="10" height="10" />
                                <p>Documentação</p>
                            </div>
                        </div>
                        <div className="faq-items">
                            <div className="inside-items">
                                <img src="" alt=""/>
                                <p>Moradia</p>  
                            </div>
                        </div>
                        <div className="faq-items">
                            <div className="inside-items">
                                <img src="" alt=""/>
                                <p>Saúde</p>
                            </div>
                        </div>
                    </div>
                    <div className="box-2">
                        <div className="faq-items">
                            <div className="inside-items">
                                <img src="" alt=""/>
                                <p>Oportunidades</p>        
                            </div>
                        </div>
                        <div className="faq-items">
                            <div className="inside-items">
                                <img src="" alt=""/>
                                <p>Primeiros Passos</p>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FaqItems
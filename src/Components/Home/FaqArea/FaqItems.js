import React, { Component } from 'react'

import './FAQItems.css'
import documentacaoIcon from '../../../Img/documentacao-icon.svg'
import moradiaIcon from '../../../Img/moradia-icon.svg'
import saudeIcon from '../../../Img/saude-icon.svg'
import oportunidadesIcon from '../../../Img/oportunidades-icon.svg'
import primeirospassosIcon from '../../../Img/primeirospassos-icon.svg'

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
                                <img src={ documentacaoIcon } alt="link para documentação" width="30" height="30" />
                                <p>Documentação</p>
                            </div>
                        </div>
                        <div className="faq-items">
                            <div className="inside-items">
                                <img src={ moradiaIcon } alt="link para moradia" width="30" height="30" />
                                <p>Moradia</p>  
                            </div>
                        </div>
                        <div className="faq-items">
                            <div className="inside-items">
                                <img src={ saudeIcon } alt="link para saúde" width="30" height="30" />
                                <p>Saúde</p>
                            </div>
                        </div>
                    </div>
                    <div className="box-2">
                        <div className="faq-items">
                            <div className="inside-items">
                                <img src={ oportunidadesIcon } alt="link para oportunidades" width="30" height="30" />
                                <p>Oportunidades</p>        
                            </div>
                        </div>
                        <div className="faq-items">
                            <div className="inside-items">
                                <img src={ primeirospassosIcon } alt="link para primeiros passos" width="30" height="30" />
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
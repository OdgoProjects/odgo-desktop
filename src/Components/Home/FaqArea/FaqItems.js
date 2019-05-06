import React, { Component } from 'react'

import './FAQItems.css'
import documentacaoIcon from '../../../Img/documentacao-icon.svg'
import moradiaIcon from '../../../Img/moradia-icon.svg'
import saudeIcon from '../../../Img/saude-icon.svg'
import oportunidadesIcon from '../../../Img/oportunidades-icon.svg'
import primeirospassosIcon from '../../../Img/primeirospassos-icon.svg'

class FaqItems extends Component {
    constructor(props){
        super(props)
        this.state = {
            showDocumentacaoQuestions: false,
            showMoradiaQuestions: false,
            showSaudeQuestions: false,
            showOportunidadesQuestions: false,
            showPrimeirosPassosQuestions: false
        }

        this.showDocumentacaoQuestions = this.showDocumentacaoQuestions.bind(this)
        this.closeDocumentacaoQuestions = this.closeDocumentacaoQuestions.bind(this)
        
        this.showMoradiaQuestions = this.showMoradiaQuestions.bind(this)
        this.closeMoradiaQuestions = this.closeMoradiaQuestions.bind(this)
        
        this.showSaudeQuestions = this.showSaudeQuestions.bind(this)
        this.closeSaudeQuestions = this.closeSaudeQuestions.bind(this)
        
        this.showOportunidadesQuestions = this.showOportunidadesQuestions.bind(this)
        this.closeOportunidadesQuestions = this.closeOportunidadesQuestions.bind(this)
        
        this.showPrimeirosPassosQuestions = this.showPrimeirosPassosQuestions.bind(this)
        this.closePrimeirosPassosQuestions = this.closePrimeirosPassosQuestions.bind(this)
    }

    showDocumentacaoQuestions(e){
        e.preventDefault()
        this.setState({
            showDocumentacaoQuestions: true,
        },
        () => {
            document.addEventListener('click', this.closeDocumentacaoQuestions)
        })
    }

    closeDocumentacaoQuestions(){
        this.setState({
            showDocumentacaoQuestions: false,
        },
        () => {
            document.removeEventListener('click', this.closeDocumentacaoQuestions)
        })
    }

    showMoradiaQuestions(e){
        e.preventDefault()
        this.setState({
            showMoradiaQuestions: true,
        },
        () => {
            document.addEventListener('click', this.closeMoradiaQuestions)
        })
    }

    closeMoradiaQuestions(){
        this.setState({
            showMoradiaQuestions: false,
        },
        () => {
            document.removeEventListener('click', this.closeMoradiaQuestions)
        })
    }

    showSaudeQuestions(e){
        e.preventDefault()
        this.setState({
            showSaudeQuestions: true,
        },
        () => {
            document.addEventListener('click', this.closeSaudeQuestions)
        })
    }

    closeSaudeQuestions(){
        this.setState({
            showSaudeQuestions: false,
        },
        () => {
            document.removeEventListener('click', this.closeSaudeQuestions)
        })
    }

    showOportunidadesQuestions(e){
        e.preventDefault()
        this.setState({
            showOportunidadesQuestions: true,
        },
        () => {
            document.addEventListener('click', this.closeOportunidadesQuestions)
        })
    }

    closeOportunidadesQuestions(){
        this.setState({
            showOportunidadesQuestions: false,
        },
        () => {
            document.removeEventListener('click', this.closeOportunidadesQuestions)
        })
    }

    showPrimeirosPassosQuestions(e){
        e.preventDefault()
        this.setState({
            showPrimeirosPassosQuestions: true,
        },
        () => {
            document.addEventListener('click', this.closePrimeirosPassosQuestions)
        })
    }

    closePrimeirosPassosQuestions(){
        this.setState({
            showPrimeirosPassosQuestions: false,
        },
        () => {
            document.removeEventListener('click', this.closePrimeirosPassosQuestions)
        })
    }

    render(){
        return(
            <div>
                <div className="question-container">
                    <p>Perguntas Frequentes</p>
                </div>
                <div className="faq-box">
                    <div className="box-1">
                        <div className="faq-items" onClick={ this.showDocumentacaoQuestions }>
                            <div className="inside-items">
                                <img src={ documentacaoIcon } alt="link para documentação" width="30" height="30" />
                                <p>Documentação</p>
                            </div>
                            <div className="arrow-dropdown">
                                <i class="fas fa-sort-down"></i>
                            </div>
                        </div>
                        {
                            this.state.showDocumentacaoQuestions
                                ? (
                                    <ul id='documentacao-questions'>
                                        <li>
                                            <a href="/">
                                                Eu preciso fazer a validação do meu diploma?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como posso ir para Portugal sozinho ou com a família?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como faço para tirar o visto português?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como eu posso fazer o reagrupamento familiar?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como eu faço para saber se tenho direito à cidadania portuguesa?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como eu posso solicitar a autorização de residência?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                O que é o cartão cidadão?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como eu faço para solicitar o passaporte europeu?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como eu faço para levar meu animal de estimação para Portugal?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como funciona o imposto de renda para brasileiros em Portugal?
                                            </a>
                                        </li>
                                    </ul>
                                )
                                : (
                                    null
                                )
                        }
                        <div className="faq-items" onClick={ this.showMoradiaQuestions }>
                            <div className="inside-items">
                                <img src={ moradiaIcon } alt="link para moradia" width="30" height="30" />
                                <p>Moradia</p>  
                            </div>
                            <div className="arrow-dropdown">
                                <i class="fas fa-sort-down"></i>
                            </div>
                        </div>
                        {
                            this.state.showMoradiaQuestions
                                ? (
                                    <ul id='moradia-questions'>
                                        <li>
                                            <a href="/">
                                                Como funciona o aluguel de apartamentos em Portugal?
                                            </a>
                                        </li>
                                    </ul>
                                )
                                : (
                                    null
                                )
                        }
                        <div className="faq-items" onClick={ this.showSaudeQuestions }>
                            <div className="inside-items">
                                <img src={ saudeIcon } alt="link para saúde" width="30" height="30" />
                                <p>Saúde</p>
                            </div>
                            <div className="arrow-dropdown">
                                <i class="fas fa-sort-down"></i>
                            </div>
                        </div>
                        {
                            this.state.showSaudeQuestions
                                ? (
                                    <ul id='saude-questions'>
                                        <li>
                                            <a href="/">
                                                Como funciona o sistema de saúde português?
                                            </a>
                                        </li>                                        
                                        <li>
                                            <a href="/">
                                                O que é PB4?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                O que é Seguro Viagem Internacional?
                                            </a>
                                        </li>
                                    </ul>
                                )
                                : (
                                    null
                                )
                        }
                    </div>
                    <div className="box-2">
                        <div className="faq-items" onClick={ this.showOportunidadesQuestions }>
                            <div className="inside-items">
                                <img src={ oportunidadesIcon } alt="link para oportunidades" width="30" height="30" />
                                <p>Oportunidades</p>        
                            </div>
                            <div className="arrow-dropdown">
                                <i class="fas fa-sort-down"></i>
                            </div>
                        </div>
                        {
                            this.state.showOportunidadesQuestions
                                ? (
                                    <ul id='oportunidades-questions'>
                                        <li>
                                            <a href="/">
                                                Como funciona a educação básica em Portugal?
                                            </a>
                                        </li>                                        
                                        <li>
                                            <a href="/">
                                                Como funciona a educação superior em Portugal?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como eu faço para estudar em Portugal com a nota do ENEM?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como funciona a questão do emprego em Portugal?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como funciona a aposentadoria em Portugal?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como abrir uma empresa em Portugal?
                                            </a>
                                        </li>
                                    </ul>
                                )
                                : (
                                    null
                                )
                        }
                        <div className="faq-items" onClick={ this.showPrimeirosPassosQuestions }>
                            <div className="inside-items">
                                <img src={ primeirospassosIcon } alt="link para primeiros passos" width="30" height="30" />
                                <p>Primeiros Passos</p>  
                            </div>
                            <div className="arrow-dropdown">
                                <i class="fas fa-sort-down"></i>
                            </div>
                        </div>
                        {
                            this.state.showPrimeirosPassosQuestions
                                ? (
                                    <ul id='primeirospassos-questions'>
                                        <li>
                                            <a href="/">
                                                Como abrir uma conta bancária em Portugal?
                                            </a>
                                        </li>                                        
                                        <li>
                                            <a href="/">
                                                O que é NIF?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como é possível transferir dinheiro do Brasil para Portugal?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como faço para votar fora do país?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                O que é SEF?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                É preciso comprar passagem de volta, se vou morar em Portugal?
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/">
                                                Como faço para levar minha mudança para Portugal?
                                            </a>
                                        </li>
                                    </ul>
                                )
                                : (
                                    null
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default FaqItems
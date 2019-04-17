import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './QuestionBox.css'

class QuestionBox extends Component {
    render() {
        return (
            <div>
                <div className="question-box">
                    <div className="main-question">   
                        <p>
                            Não encontrou o que você procurava? Envie sua pergunta aqui!
                        </p>
                    </div> 
                    <div className="name-question">
                        <label>Seu nome</label>
                        <input type="text" name="name-field" id="name-field" />
                    </div>
                    <div className="email-question">
                        <label>Seu e-mail</label>
                        <input type="email" name="email-field" id="email-field"/>
                    </div>
                    <div className="text-question">
                        <label>Sua pergunta</label>
                        <textarea name="question-field" id="question-field" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="send-question">
                    <Link type="submit" className='sending-link'>
                        <p className='sending-click'>Enviar</p>
                    </Link>
                </div>
            </div>
        )
    }
}

export default QuestionBox
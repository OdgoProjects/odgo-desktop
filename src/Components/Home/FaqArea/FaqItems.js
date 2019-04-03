import React, { Component } from 'react'

import './FaqItems.css'

class FaqItems extends Component {
    render(){
        return(
            <div className="faq-box">
                <div className="box-1">
                    <div className="faq-items">
                        <div className="inside-items">
                            <img src="" alt=""/>
                            Documentação
                        </div>
                    </div>
                    <div className="faq-items">
                        <div className="inside-items">
                            <img src="" alt=""/>
                            Moradia
                        </div>
                    </div>
                    <div className="faq-items">
                        <div className="inside-items">
                            <img src="" alt=""/>
                            Saúde
                        </div>
                    </div>
                </div>
                <div className="box-2">
                    <div className="faq-items">
                        <div className="inside-items">
                            <img src="" alt=""/>
                            Oportunidades
                        </div>
                    </div>
                    <div className="faq-items">
                        <div className="inside-items">
                            <img src="" alt=""/>
                            Primeiros Passos
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FaqItems
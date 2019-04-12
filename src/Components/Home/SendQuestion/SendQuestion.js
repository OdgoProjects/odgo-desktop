import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SendQuestion.css'

class SendQuestion extends Component {
    render(){
        return(
            <div className="contact-us">
                <Link to='' className='question-button'>
                    <p className='talk'>Converse com a gente</p>
                </Link>
            </div>
        )
    }
}

export default SendQuestion
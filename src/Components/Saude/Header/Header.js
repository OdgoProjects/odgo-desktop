import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../../../Img/logo.svg'

class Header extends Component {
    render(){
        return(
            <header>
                <nav className="navbar nav-saude" role="navigation" aria-label="main navigation">
                    <div className="main-nav">
                        <div>
                            <Link to="/" className="navbar-item odgo-logo">
                                <img src={ logo } alt="odgo logo" width="70" height="70" />
                            </Link>
                        </div>
                        <form action="" method="POST" className='form-answer'>
                                <div className="input-box-answer">
                                    <div className="button-area">
                                        <input type="search" placeholder="Procurando algo?" />
                                        <button>
                                            <i className="fa fa-search sub-lupa"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        <div className="navbar-item">
                            <Link to="/" className="odgo-home">
                                Home
                            </Link>
                            <Link className="odgo-login">
                                <i className="fas fa-user-circle"></i>
                            </Link>
                        </div>
                    </div>
                    <div className='user-answer'>
                        <div className="user-picture">
                            <img src="" alt=""/>
                        </div>
                        <div className="topics">
                            <div className="topic-question">
                                <p>Onde morar em Portugal?</p>
                            </div>
                            <div className="topic-item-saude">
                                <p>saúde</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header


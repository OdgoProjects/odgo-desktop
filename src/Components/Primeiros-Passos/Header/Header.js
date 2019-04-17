import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
// import Search from '../Search/Search'

class Header extends Component {
    render(){
        return(
            <header>
                <nav className="navbar nav-primeiros-passos" role="navigation" aria-label="main navigation">
                    <div className="main-nav">
                        <div>
                            <Link to="/" className="navbar-item odgo-logo">
                                <img src="" alt="odgo logo" width="" height="" />
                            </Link>
                        </div>
                        <form action="" method="POST" className='form-answer'>
                                <div className="input-box-answer">
                                    <div className="button-area">
                                        <input type="search" />
                                        <button>
                                            <i className="fa fa-search"></i>
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
                            <div className="topic-item-primeiros-passos">
                                <p>primeiros passos</p>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header


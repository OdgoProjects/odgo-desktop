import React, { Component } from 'react'

import './Header.css'
import Search from '../Search/Search'

class Header extends Component {
    render(){
        return(
            <header>
                <nav className="navbar nav-answer" role="navigation" aria-label="main navigation">
                    <div className="main-nav">
                        <a href="/" className="navbar-item odgo-logo">
                            <img src="" alt="odgo logo" width="" height="" />
                        </a>
                        <div className="navbar-item">
                            <a href="/" className="odgo-home">
                                Home
                            </a>
                            <a href="/" className="odgo-parceiros">
                                Parceiros
                            </a>
                            <a href="/" className="odgo-login">
                                <i className="fas fa-user-circle"></i>
                            </a>
                        </div>
                    </div>
                    <Search />
                </nav>
            </header>
        )
    }
}

export default Header


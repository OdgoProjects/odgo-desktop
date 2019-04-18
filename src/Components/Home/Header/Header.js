import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../../../Img/logo.svg'
import Search from '../Search/Search'

class Header extends Component {
    render(){
        return(
            <header>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="main-nav">
                        <div>
                            <Link to="/" className="navbar-item odgo-logo">
                                <img src={ logo } alt="odgo logo" width="70" height="70" />
                            </Link>
                        </div>
                        <div className="navbar-item">
                            <Link to="/" className="odgo-home">
                                Home
                            </Link>
                            <Link className="odgo-login">
                                <i className="fas fa-user-circle"></i>
                            </Link>
                        </div>
                    </div>
                    <Search />
                </nav>
            </header>
        )
    }
}

export default Header


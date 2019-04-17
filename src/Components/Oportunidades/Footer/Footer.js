import React from 'react'

import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-oportunidades">
            <ul>
                <li className="list-inline-item">
                    <a href="/">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="/">
                        <i className="fa fa-envelope"></i>
                    </a>
                </li>
            </ul>
            <div className="company-info">
                <p>OdGo | Uma empresa do grupo <a href="https://cidadaniaja.com.br/" className="cidadania-link">Cidadania Já</a></p>
            </div>
            <div className="copyright-info">
                <p>
                    <i className="far fa-copyright"></i> 
                    <span> Todos os direitos reservados | 2019</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer


import React, { Component } from 'react'

import './Search.css'

class Search extends Component {
    render(){
        return(
            <form action="" method="POST">
     
                <div className="input-box">
                <label>Vai se mudar para portugal? Podemos tirar suas dúvidas!</label>
                    <div className="button-area">
                    <input type="search" />
                        <button>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                
            </form>
        )
    }
}

export default Search
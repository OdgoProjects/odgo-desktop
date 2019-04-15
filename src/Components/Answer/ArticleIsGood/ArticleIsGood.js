import React from 'react'

import './ArticleIsGood.css'

const ArticleIsGood = () => {
    return (
        <div className="question-util">
            <p>Esse artigo foi útil para você?</p>
            <button className='click-yes'>Sim</button>
            <button className='click-no'>Não</button>
        </div>
    )
}

export default ArticleIsGood
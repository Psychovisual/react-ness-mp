import React from 'react'

const Journaldesigner = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1Ger-OJqIortG--42aY-wGXZBKGzdixUEeiqUIUTOCsg/edit"></iframe></p>
        )
        } else {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1cSyAtgLWoeCp9IOQpItZWrjdXvG9IilbDS6i7bQ_gGI/edit"></iframe></p>
        )
        }
}

export default Journaldesigner
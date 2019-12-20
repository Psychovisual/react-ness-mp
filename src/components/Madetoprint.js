import React from 'react'

const Madetoprint = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>Pas de documentation à ce titre</p>
        )
        } else {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1Jq1V9njec1yv8FLQn3k9FtHxjk_5vG2SpywIabk-aSE/edit"></iframe></p>
        )
        }
}

export default Madetoprint
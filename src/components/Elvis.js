import React from 'react'

const Elvis = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame Elvis FR</p>
        )
        } else {
        return(
            <p>IFrame Elvis DE AAAAAAAAAAAAAAAAA</p>
            
        )
        }
}

export default Elvis
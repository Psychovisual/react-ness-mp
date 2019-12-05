import React from 'react'

const Claro = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame Claro FR</p>
        )
        } else {
        return(
            <p>IFrame Claro DE</p>
        )
        }
}

export default Claro
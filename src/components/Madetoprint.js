import React from 'react'

const Madetoprint = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame Madetoprint FR</p>
        )
        } else {
        return(
            <p>IFrame Madetoprint DE</p>
        )
        }
}

export default Madetoprint
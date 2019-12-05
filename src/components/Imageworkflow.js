import React from 'react'

const Imageworkflow = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame Imageworkflow FR</p>
        )
        } else {
        return(
            <p>IFrame Imageworkflow DE</p>
        )
        }
}

export default Imageworkflow
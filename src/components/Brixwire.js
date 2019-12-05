import React from 'react'

const Brixwire = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame Brixwire FR</p>
        )
        } else {
        return(
            <p>IFrame Brixwire DE</p>
        )
        }
}

export default Brixwire
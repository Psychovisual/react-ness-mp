import React from 'react'

const Contentstation = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame Contentstation FR</p>
        )
        } else {
        return(
            <p>IFrame Contentstation DE</p>
        )
        }
}

export default Contentstation
import React from 'react'

const Elvis = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame Elvis FR</p>
        )
        } else {
        return(
            <p>IFrame Elvis DE</p>
            
        )
        }
}

export default Elvis
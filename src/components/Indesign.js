import React from 'react'

const Indesign = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame InDesign FR</p>
        )
        } else {
        return(
            <p>IFrame InDesign DE</p>
        )
        }
}

export default Indesign
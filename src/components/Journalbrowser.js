import React from 'react'

const Journalbrowser = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame JB FR</p>
        )
        } else {
        return(
            <p>IFrame JB DE</p>
        )
        }
}

export default Journalbrowser
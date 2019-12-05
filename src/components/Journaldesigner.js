import React from 'react'

const Journaldesigner = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame JD FR</p>
        )
        } else {
        return(
            <p>IFrame JD DE</p>
        )
        }
}

export default Journaldesigner
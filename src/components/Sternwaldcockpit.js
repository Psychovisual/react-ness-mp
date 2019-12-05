import React from 'react'

const Sternwaldcockpit = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>IFrame sternwaldcockpit FR</p>
        )
        } else {
        return(
            <p>IFrame sternwaldcockpit DE</p>
        )
        }
}

export default Sternwaldcockpit
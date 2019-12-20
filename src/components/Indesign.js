import React from 'react'

const Indesign = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p>Pas de documentation à ce titre</p>
        )
        } else {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1EwMo5VOWLw1MTXTB0OnfRwqvQwQRn-uQ95WxfHbvtM4/edit"></iframe></p>
        )
        }
}

export default Indesign
import React from 'react'

const Sternwaldcockpit = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1UAqH-7lJxP5gLw_mYa340FF6iYDkFJIwSx8EkwUZsy8/edit"></iframe></p>
        )
        } else {
        return(
            <p>Keine Dokumentation</p>
        )
        }
}

export default Sternwaldcockpit
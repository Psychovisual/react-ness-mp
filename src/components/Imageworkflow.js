import React from 'react'

const Imageworkflow = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1DudRx1qXei1acecb7fIJiUQARntgvvjN1kYKPsZb-Uw/edit"></iframe></p>
        )
        } else {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/19HN-PNuyXPhrp5cVBNd7i1BEHzFEyNlH9NVkXiU7wDM/edit"></iframe></p>
        )
        }
}

export default Imageworkflow
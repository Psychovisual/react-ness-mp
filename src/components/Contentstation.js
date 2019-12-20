import React from 'react'

const Contentstation = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1iFo2TGzR3-UTwqO5YH_tdHGYhxRQSxLt1C2WTOiykmY/edit"></iframe></p>
        )
        } else {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1FqfaoYI_BQIYPdC9zJQDwoqDDH9lTXWPeg6N1m4wes0/edit"></iframe></p>
        )
        }
}

export default Contentstation
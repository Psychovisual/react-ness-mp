import React from 'react'

const Journalbrowser = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1P7y3YYtGV_1WegpyKi3jl98W8pTq034kuYrDhD_NrU4/edit"></iframe></p>
        )
        } else {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1O_rkguqurzx3QHfxUN9mA7QGWEfVW1-vmT0eCbWg-ek/edit"></iframe></p>
        )
        }
}

export default Journalbrowser
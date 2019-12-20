import React from 'react'

const Brixwire = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1pVKV8A1HJHTePQjGTOiiIebjpCJcRQY4XBTFfijAsNs/edit"></iframe></p>
        )
        } else {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1HpYmupTEkxUnSbFf6m5L-OkHwrO_i9Hg_-aIzuqZMi0/edit"></iframe></p>
        )
        }
}

export default Brixwire
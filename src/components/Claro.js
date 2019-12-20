import React from 'react'

const Claro = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1Af_X3khc2AnfCAOD7houmcgVdUQkB2Pz1FxDtogoxEU/edit"></iframe></p>
        )
        } else {
        return(
            <p><iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1KjmZDsGLxS51HI70_BqLAf_IQizQ8TMkTUY9nCQbN44/edit"></iframe></p>
        )
        }
}

export default Claro
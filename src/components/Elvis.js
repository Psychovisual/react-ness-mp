import React from 'react'

const Elvis = ({ isFrench }) => {

    const language = isFrench ? 'FR' : 'DE'
    if (language === 'FR') {
        return(
            <iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1SaKDsDGlVxt6NHOJ_VUTDaGd9KTvmzeXw4lqEqiRD30/edit"></iframe>
        )
        } else {
        return(
            <iframe id="conteniframe" title="myFrame" width="100%" src="https://docs.google.com/document/d/1QaIFTSmfmFb2KX-MY8kVEcvisW4AGrJsG1kZjD-tlPE/edit"></iframe>
        )
        }
}

export default Elvis
import React from 'react';



const Menu = ({ actualLanguage, handleToggleLanguage }) => (
    
    <div class="language">
        <div class="language-prompt">
            {/*<p>Language : {actualLanguage}</p>*/}
        </div>
        <div class="language-button"> 
            <button type="button" class="btn btn-success btn-sm" onClick={() => handleToggleLanguage()}>{actualLanguage === 'Français' ? 'Deutsch' : 'Français'}</button>
        </div>
    </div>
)

export default Menu


import React from 'react';
// t'as deux syntax
// soit tu déestructure comme je l'ai fait
// soit tu met const Menu = (props) => {}
// et tu accèdes au props par : props.actualLanguage dans ton code
const Menu = ({ actualLanguage, handleToggleLanguage }) => (
    <div>
        <div>
            <p>Language : {actualLanguage}</p>
        </div>
        <div> 
            <button onClick={() => handleToggleLanguage()}>{actualLanguage}</button>
        </div>
    </div>
)

export default Menu


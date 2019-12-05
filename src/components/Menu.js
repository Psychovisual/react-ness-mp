import React from 'react';



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


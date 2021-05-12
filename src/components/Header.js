import React from 'react'

const HeaderComponent = ({handleToggle}) => {
    return(
        <div className='header'>
            <h1>Notes</h1>
            <button 
                onClick ={() => handleToggle((previousDarkMode) => !previousDarkMode )} 
                className='toggle-button'>Toggle Mode</button>
        </div>
        
    )
}

export default HeaderComponent
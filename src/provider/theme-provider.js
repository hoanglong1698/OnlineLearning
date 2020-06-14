import React, { useState } from 'react'

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState();

    return (
        <ThemeContext.Provider value={{ authentication: theme, setAuthentication: setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
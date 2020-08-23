import React, { useState } from 'react'
import { themeService } from './../core/services/theme-services';

const ThemeContext = React.createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themeService("Light"));
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }
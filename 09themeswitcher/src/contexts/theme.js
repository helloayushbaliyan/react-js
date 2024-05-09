

import { createContext, useContext, useState } from 'react';



export const ThemeContext = createContext({
    ThemeMode: "light",
    DarkTheme: () => { },
    LightTheme: () => { },
});

export const ThemeProvider = ThemeContext.Provider;


export default function UseTheme() {
    
    return useContext(ThemeContext)

}
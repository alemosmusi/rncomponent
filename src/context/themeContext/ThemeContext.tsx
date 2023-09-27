import { Children, createContext } from "react";

interface ThemeContextProps {
    theme: any;
    setDarkTheme: ()=> void;
    setLightTheme: ()=> void;
}





export const ThemeContext = createContext({} as ThemeContextProps)


export const ThemeProvider = ({children}: any) => {

    const theme = {};

    const setDarkTheme = () => {
        console.log('dark')
        
    }
    const setLightTheme = () => {
        console.log('ligh')
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}
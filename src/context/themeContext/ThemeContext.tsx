import { Children, createContext, useReducer } from "react";
import { ThemeState, ligthTheme, themeReducer } from "./themeReducer";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: ()=> void;
    setLightTheme: ()=> void;
}





export const ThemeContext = createContext({} as ThemeContextProps)


export const ThemeProvider = ({children}: any) => {

    const [theme, dispatch] = useReducer(themeReducer, ligthTheme)

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'})
        console.log('dark')
        
    }
    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'})
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
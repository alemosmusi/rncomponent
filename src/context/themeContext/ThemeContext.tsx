import { Children, createContext, useEffect, useReducer } from "react";
import { ThemeState, darkTheme, ligthTheme, themeReducer } from "./themeReducer";
import { AppState, Appearance, useColorScheme } from "react-native";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: ()=> void;
    setLightTheme: ()=> void;
}





export const ThemeContext = createContext({} as ThemeContextProps)


export const ThemeProvider = ({children}: any) => {

    const colorScheme = useColorScheme()

    // const [theme, dispatch] = useReducer(themeReducer, (colorScheme === 'dark') ? darkTheme : ligthTheme)
    const [theme, dispatch] = useReducer(
        themeReducer, 
        (Appearance.getColorScheme() === 'dark') ? darkTheme : ligthTheme)


    useEffect(() => {
      
        AppState.addEventListener('change', (status) =>{
            if (status === 'active'){
                ( Appearance.getColorScheme() === 'light')
                    ?setLightTheme()
                    :setDarkTheme()
            }
        })

    }, [])
    
    // Solo funciona en ios 
    // useEffect(() => {
    //   if(colorScheme === 'light'){
    //     setLightTheme()
    //   }else{
    //     setDarkTheme()
    //   }
    // }, [colorScheme])
    


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
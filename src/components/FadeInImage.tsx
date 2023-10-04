import React, { useContext, useState } from 'react'
import { ActivityIndicator, Animated, ImageStyle, StyleProp, Text, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
    uri:string;
    style?: StyleProp<ImageStyle>

}
    
const FadeInImage = ({uri, style}:Props) => {


    const {opacity, fadeIn} = useAnimation()
    const [isLoading, setIsLoading] = useState(false)

    const {theme:{colors,dividerColor,dark}} = useContext(ThemeContext)


    const finishLoading= ()=>{
        setIsLoading(false)
        fadeIn()
    }


   return (

    <View style={{
        justifyContent:'center',
        alignItems:'center'
    }}

    >

        {
            isLoading && 
            <ActivityIndicator style={{
                position:'absolute'
            }} color={colors.primary} size={30}/>
        }

        <Animated.Image 
             source={{uri}}
             onLoadEnd={finishLoading}

             style={{
                 ...style as any,
                 opacity
             }}
        />
    </View>
)
}
    
export default FadeInImage
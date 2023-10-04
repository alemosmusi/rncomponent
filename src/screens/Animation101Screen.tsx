import React, { useContext, useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'
import { ThemeContext } from '../context/themeContext/ThemeContext'
    
const Animation101Screen = () => {


    const {opacity,fadeIn,fadeOut,position, startMovingPosition}=useAnimation()
    const {theme:{colors}} = useContext(ThemeContext)




   return (
       <View style={styles.container}>
           <Animated.View style={{
            ...styles.purpleBox,
            backgroundColor: colors.primary,
            opacity,
            marginBottom: 20,
            transform: [{
                translateX: position
            }]
            }}/>
            <Button 
            title='FadeIn'
            onPress={()=>{
                fadeIn();
                startMovingPosition(-100)
            
            }}
            color={colors.primary}
            
            />
            <Button 
            title='FadeOut'
            onPress={fadeOut}
            color={colors.primary}
            />
       </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox:{
        width: 150,
        height: 150
    }
});
    
export default Animation101Screen
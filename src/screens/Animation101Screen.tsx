import React, { useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'
    
const Animation101Screen = () => {


    const {opacity,fadeIn,fadeOut,position, startMovingPosition}=useAnimation()




   return (
       <View style={styles.container}>
           <Animated.View style={{
            ...styles.purpleBox,
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
            
            />
            <Button 
            title='FadeOut'
            onPress={fadeOut}
            
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
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    }
});
    
export default Animation101Screen
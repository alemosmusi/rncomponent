import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import HeaderTitle from '../components/HeaderTitle'
import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ChangeThemeScreen = () => {


    const {setLightTheme, setDarkTheme, theme:{colors}} = useContext( ThemeContext )

  return (
    <View style={ styles.globlaMargin}>
        <HeaderTitle title='Theme' />

        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <TouchableOpacity 
                onPress={()=>setLightTheme()}
                activeOpacity={0.8}
                style={{
                backgroundColor: colors.primary,
                width: 150,
                height: 50,
                borderRadius: 50,
                justifyContent: 'center',

            }}>
                <Text 
                    style={{
                        color:'white', 
                        textAlign:'center',
                        fontSize: 22
                    }}>
                        Light
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={()=>setDarkTheme()}
                activeOpacity={0.8}
                style={{
                backgroundColor: colors.primary,
                width: 150,
                height: 50,
                borderRadius: 50,
                justifyContent: 'center',

            }}>
                <Text 
                    style={{
                        color:'white', 
                        textAlign:'center',
                        fontSize: 22
                    }}>
                        Dark
                </Text>
            </TouchableOpacity>

        </View>

    </View>
  )
}



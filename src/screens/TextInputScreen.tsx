import React, { useContext, useState } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ScrollView } from 'react-native-gesture-handler'
import { useForm } from '../hooks/useForm'
import CustomSwtich from '../components/CustomSwitch'
import { ThemeContext } from '../context/themeContext/ThemeContext'
    
const TextInputScreen = () => {


    const { form, onChange, isSubscribed} = useForm({
        name:'',
        email:'',
        phone: '',
        isSubscribed:false
    
    })

    const {theme:{colors,dividerColor}} = useContext(ThemeContext)



   return (

    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    
    >
        <ScrollView>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>


        

       <View style={styles.globlaMargin}>
           <HeaderTitle title="TextInputs"/>


           <TextInput 
            style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text

            }}
            placeholder='Nombre'
            autoCorrect={false}
            autoCapitalize='words'
            onChangeText={(value)=> onChange(value, 'name')}
            placeholderTextColor={dividerColor}

           />
           <TextInput 
            style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text

            }}
            placeholder='email'
            autoCorrect={false}
            autoCapitalize='none'
            onChangeText={(value)=> onChange(value, 'email')}
            keyboardType='email-address'
            keyboardAppearance='dark'
            placeholderTextColor={dividerColor}
            
           />


<View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}>Suscribirse</Text>
            <CustomSwtich isOn={isSubscribed} onChange={(value) => onChange( value, 'isSubscribed')}/>
        </View>





           <HeaderTitle title={JSON.stringify(form,null,3)}/>
           <HeaderTitle title={JSON.stringify(form,null,3)}/>
           <TextInput 
            style={{
                ...stylesScreen.inputStyle,
                borderColor: colors.text,
                color: colors.text

            }}
            placeholder='telefono'
            onChangeText={(value)=> onChange(value, 'phone')}
            keyboardType='phone-pad'
            placeholderTextColor={dividerColor}
           />

            <HeaderTitle title={JSON.stringify(form,null,3)}/>
       <View style={{height:100}}/>
       </View>


       </TouchableWithoutFeedback>
        </ScrollView>

    </KeyboardAvoidingView>
)
}


const stylesScreen = StyleSheet.create({
    inputStyle:{
        borderWidth: 1,
        height:50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    switchText:{
        fontSize: 25
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
});
    
export default TextInputScreen
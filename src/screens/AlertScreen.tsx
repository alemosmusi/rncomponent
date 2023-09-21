import React from 'react'
import { Alert, Button, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import prompt from 'react-native-prompt-android';
    
const AlertScreen = () => {

    const showAlert = () =>{

        Alert.alert('Titulo', 'Este es el mesnsaje de la alerta', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'destructive',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
            
          ],
          {
            cancelable: true,
            onDismiss: ()=> console.log('onDismiss')
            
        }
          );

    }

    const showPromp = ()=>{
        // Alert.prompt(
        //     '¿Estas seguro?',
        //     'Esta accion no se puede revertir',
        //     (valor:string) => console.log('info: ' + valor),
        //     'plain-text',
        //     'hola mundo',
        //     'number-pad'
        // )
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
             {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }



   return (
       <View style={styles.globlaMargin}>
           <HeaderTitle title='Alert Screen'/>


           <Button 
            title='Mostrar alerta'
            onPress={showAlert}
           />


            <View style={{height:10}}></View>

           <Button 
            title='Mostrar promp'
            onPress={showPromp}
           />
       </View>
)
}
    
export default AlertScreen
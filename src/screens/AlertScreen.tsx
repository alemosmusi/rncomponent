import React from 'react'
import { Alert, Button, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
    
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
        Alert.prompt(
            '¿Estas seguro?',
            'Esta accion no se puede revertir',
            (valor:string) => console.log('info: ' + valor),
            'plain-text',
            'hola mundo',
            'number-pad'
        )
    }



   return (
       <View style={styles.globlaMargin}>
           <HeaderTitle title='Alert Screen'/>


           <Button 
            title='Mostrar alerta'
            onPress={showAlert}
           />
           <Button 
            title='Mostrar promp'
            onPress={showPromp}
           />
       </View>
)
}
    
export default AlertScreen
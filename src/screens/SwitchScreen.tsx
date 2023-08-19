import React, { useState } from 'react'
import { Platform, Switch, Text, View } from 'react-native'
    
const SwitchScreen = () => {


    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);



   return (
       <View style={{marginTop: 100}}>
           <Switch
                trackColor={{false: '#D9D9DB', true: '#5856D6'}}
                // thumbColor={isEnabled ? '#5856D6' : '#f4f3f4'}
                thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
       </View>
)
}
    
export default SwitchScreen
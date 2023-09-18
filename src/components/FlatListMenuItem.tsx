import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

interface Props {
    menuItem: MenuItem
}
    
const FlatListMenuItem = ({menuItem}:Props) => {



    const navigation = useNavigation() as any


   return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=>navigation.navigate(menuItem.component)}
    >
        
       <View style={styles.container}>
        <Icon 
         name={menuItem.icon}
         color='#5856D6'
         size={23}
        />
       <Text style={styles.itemText}>
         {menuItem.name} 
       </Text>
       <View style={styles.flechaDerecha}/>
       <Icon 
         name='chevron-forward-outline'
         color='#5856D6'
         size={23}
        />
     </View>
    </TouchableOpacity>
)
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        

    },
    itemText:{
        marginLeft: 10,
        fontSize: 19
    },
    flechaDerecha:{
        flex:1
    }
});
    
export default FlatListMenuItem
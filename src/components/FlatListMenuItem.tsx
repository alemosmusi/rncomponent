import { useNavigation, useTheme } from '@react-navigation/native'
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '../context/themeContext/ThemeContext'

interface Props {
    menuItem: MenuItem
}
    
const FlatListMenuItem = ({menuItem}:Props) => {

    // const {colors} = useTheme()


    const {theme:{colors}} = useContext( ThemeContext)


    const navigation = useNavigation() as any


   return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=>navigation.navigate(menuItem.component)}
    >
        
       <View style={styles.container}>
        <Icon 
         name={menuItem.icon}
         color={colors.primary}
         size={23}
        />
       <Text style={styles.itemText}>
         {menuItem.name} 
       </Text>
       <View style={styles.flechaDerecha}/>
       <Icon 
         name='chevron-forward-outline'
         color={colors.primary}
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
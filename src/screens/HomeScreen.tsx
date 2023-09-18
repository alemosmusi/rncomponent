import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';




const HomeScreen = () => {
  

  

  const itemSeparator = () =>{
    return (
        <View 
            style={{
                borderBottomWidth:1,
                opacity:0.4,
                marginVertical: 8
            }}
        
        ></View>
    )
  }

  return (
    <View style={{flex: 1, ...styles.globlaMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={item => item.name}
        ListHeaderComponent={()=> <HeaderTitle title= "Opciones de menu" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';

import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';




const HomeScreen = () => {
  

  

  

  return (
    <View style={{flex: 1, ...styles.globlaMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={item => item.name}
        ListHeaderComponent={()=> <HeaderTitle title= "Opciones de menu" />}
        ItemSeparatorComponent={()=><ItemSeparator/>}
      />
    </View>
  );
};

export default HomeScreen;

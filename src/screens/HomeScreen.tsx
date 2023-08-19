import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';




const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top + 20, marginBottom: 20}}>
        <Text style={styles.title}>Opciones de menu</Text>
      </View>
    );
  };

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
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;

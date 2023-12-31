import React, { useContext, useState } from 'react'
import { RefreshControl, ScrollView, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'
    
const PullToRefreshScreen = () => {

        const [refreshing, setRefreshing] = useState(false)
        const {theme:{colors,dividerColor,dark}} = useContext(ThemeContext)

        const [data, setData] = useState<string>()


        const onRefresh = () =>{
            setRefreshing(true)

            setTimeout(() => {
                console.log('Terminamos');
                setRefreshing(false)    
                setData('hola mundo')            
            }, 3000);
        }




   return (


    <ScrollView
        refreshControl={ 
            <RefreshControl 
                refreshing={refreshing}
                onRefresh={onRefresh}
                progressViewOffset={50}
                progressBackgroundColor={dividerColor}
                colors={[colors.text]}
                // style={{backgroundColor:'#5856D6'}}
                // tintColor='white'
                // title='Refreshing'
                titleColor={dark ? 'white':'black'}
            
            />

        }
    >

       <View style={styles.globlaMargin}>
           <HeaderTitle title='PullToRefreshScreen'/>
           {
            data &&
            
           <HeaderTitle 
           title={data}
           />
           }



       </View>
    </ScrollView>
)
}
    
export default PullToRefreshScreen
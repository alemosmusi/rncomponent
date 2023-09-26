import React, { useState } from 'react'
import { Dimensions, Image, ImageSourcePropType, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel';


const { height : screenHeight, width: screenWidth} = Dimensions.get('window')


interface Slide{
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const item: Slide[] =[
    {
        title: 'Titulo 1',
        desc: 'Esto es una descripiciosio kjasd akjsd akjsd ajksd jk sad saf asf ',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Esto es una descripiciosio kjasd akjsd akjsd ajksd jk sad saf asf ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Esto es una descripiciosio kjasd akjsd akjsd ajksd jk sad saf asf ',
        img: require('../assets/slide-3.png')
    }
]


export const SlidesScreen = () => {

    const [activeIndex, setActiveIndex] = useState(0)

    const renderItem = (item: Slide) => {
        return (
        <View style={{
            flex:1,
            backgroundColor: 'white',
            borderRadius: 5,
            padding: 40,
            justifyContent: 'center'
        }}>
            <Image 
                source={item.img}
                style={{
                    width: 350,
                    height: 400,
                    resizeMode: 'center'
                }}
            />
            <Text style={styles.title}>
                {item.title}
            </Text>
            <Text style={styles.subTitle}>
                {item.desc}
            </Text>
        </View>
        )
    }




  return (
    <SafeAreaView
        style={{
            flex:1,
            paddingTop: 50
        }}
    >
        <Carousel
            //   ref={(c) => { this._carousel = c; }}
              data={item}
              renderItem={({item})=> renderItem(item)}
              sliderWidth={screenWidth}
              itemWidth={screenWidth}
              layout='default'
              onSnapToItem={(index)=>{
                setActiveIndex(index)
              }}
            />
        
        <Pagination 
            dotsLength={item.length}
            activeDotIndex={activeIndex}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 10,
                backgroundColor: '#5856D6'
            }}
        
        />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    title:{
        fontSize:30,
        fontWeight: 'bold',
        color:'#5856D6'
    },
    subTitle:{
        fontSize:16
    }
})

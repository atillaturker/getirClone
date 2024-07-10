import { View, Image } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { StyleSheet,Dimensions } from 'react-native';
import { FlatList } from 'react-native';


const banner = () => {
    const width = Dimensions.get('window').width;
    const [images, setImages] = useState([
      "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
      "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
      "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
      "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg"
    ]);
  return (
    <View>
        <FlatList
            data={images}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={width}
            decelerationRate="fast"
            snapToAlignment='center'
            renderItem={({ item }) => (
            <Image
                source={{ uri: item }}
                style={{ width , height: 190}}
            />
            )}
        />
    </View>
  )
}

export default banner
import { View, Text,Image,Dimensions,StyleSheet} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

const CategoryItem = ({title,image}) => {
    const {width, height} = Dimensions.get('window');
  return (
    <TouchableOpacity>
        <View style= {styles.container}>
            <Image source={{ uri: image }}
                style={{ width: width*0.18, height:height*0.18 ,borderRadius: 10}}
            />
            <Text style={styles.text}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width*0.25,
    height: Dimensions.get('window').height*0.25
  
    },
    text: {
    marginTop: 5,
    fontSize: 12,
    fontWeight:'700',
    color: '#616161',
    },
      
});

export default CategoryItem
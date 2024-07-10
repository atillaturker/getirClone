import { View, Text} from 'react-native'
import { useState } from 'react'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './categoryItem/categoryItem'
import products from '../../assets/products'

const items = () => {
    const [categories, setCategories] = useState(products);
    
  return (
    <View>
      <View>
        <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
            <CategoryItem
                id={item.id}
                title={item.name}
                image={item.src}
            />
            )}
        />
        <CategoryItem/>
       
      </View>
    </View>
  )
}

export default items
import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/header/header'
import { ScrollView } from 'react-native'
import Banner from '../../components/banner/banner'
import Items from '../../components/items/items'
import CategoryItem from '../../components/items/categoryItem/categoryItem'
import { NavigationContainer } from '@react-navigation/native'

export default function index() {
  return (
    
      <ScrollView>
      <Header />
      <Banner />
      <Items/>
    </ScrollView>
   
   
  )
}
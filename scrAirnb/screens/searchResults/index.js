import { FlatList, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import feed from '../../assets/data/feed'
import Post from '../../components/post'
const SearchResultsScreen = () => {
  return (
    <View>
    <FlatList
    data={feed}
    renderItem={ ({item})=> <Post post={item}/>}/>
    </View>
  )
}

export default SearchResultsScreen

const styles = StyleSheet.create({})
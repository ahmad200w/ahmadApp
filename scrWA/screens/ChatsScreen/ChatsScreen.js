import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import chats from '../../assets/data/chats.json'
import CartListItem from '../../../scrs/Components/CartListItem'
import ChatListItem from '../../components/ChatListItem'
const ChatsScreen = () => {
  return (
    <View>
     <FlatList
     data={chats}
     renderItem={({item})=><ChatListItem chat={item}/>}
     />
    </View>
  )
}

export default ChatsScreen

const styles = StyleSheet.create({})

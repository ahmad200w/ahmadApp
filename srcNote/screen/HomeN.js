import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import NoteScreen from './NoteScreen'
import SearchBar from '../components/SearchBar'

const HomeN = () => {
    
 
    const [user,setUser]=useState({})
    const findUser = async()=>{
       const result = await AsyncStorage.getItem('user')
       setUser(JSON.parse(result))

    }
    useEffect(()=>{
        findUser()
    },[])
  return (
    <SafeAreaView style={styles.contain}>
<NoteScreen user={user} />
<SearchBar/>
</SafeAreaView>
  )
}

export default HomeN

const styles = StyleSheet.create({
    contain:{
        alignItems:'center'
    }
})
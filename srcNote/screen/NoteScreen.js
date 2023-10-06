import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const NoteScreen = ({user}) => {
    const [timeGrusse,setTimeGrusse]=useState('')
   
  
const findGreet=()=>{
    const hour = new Date().getHours();
    console.log(hour)
if(hour === 0 || hour<12)return setTimeGrusse(' morrning');

 if(hour ===1 || hour <17)return setTimeGrusse(' Afternoon');
 setTimeGrusse('evening');
}
 useEffect(()=>{
    findGreet();
    },[])
  return (
    <View>
      <Text style={styles.welcomeT}>{`Good ${timeGrusse} ${user.name}`}</Text>
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({
    welcomeT:{
        fontSize:17,
        fontWeight:'800'
    }
})
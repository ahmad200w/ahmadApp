import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import dayjs from 'dayjs';
import relativeTime  from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime);

const Message = ({message}) => {
  const isMyMassage=()=>{
    return message.user.id ==='u1';
  }
  return (
    <View  style={  [styles.container,{
      backgroundColor: isMyMassage()?'#DCF8C5':'white',
      alignSelf:isMyMassage() ? 'flex-end':'flex-start'
    }]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  container: {
   
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
     // Shadows
    

   
  
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
  images: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imageContainer: {
    width: "50%",
    aspectRatio: 1,
    padding: 3,
  },
  image: {
    flex: 1,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
});
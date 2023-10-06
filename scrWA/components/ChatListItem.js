import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime  from 'dayjs/plugin/relativeTime'
import { useNavigation, useRoute } from '@react-navigation/native';
dayjs.extend(relativeTime);
const ChatListItem = ({chat}) => {

    
    const navigation = useNavigation()
  return (
    <Pressable  onPress={()=>navigation.navigate('chat',{id:chat.id ,name:chat.user.name})} style={styles.container}>
      <Image
        source={{ uri: chat.user.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name} numberOfLines={1}>
            {chat.user.name}
          </Text>
          <Text style={styles.subTitle} >
          {dayjs(chat.lastMessage.createdAt).fromNow()}
          </Text>

         
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
        {chat.lastMessage.text}
          </Text>

      </View>
    </Pressable>
  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    height: 70,
  
  },
  image: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row:{
    flexDirection: 'row',
    marginBottom:5
  },
  name: {
    flex:1,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
});

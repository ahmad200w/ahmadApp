import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const Post = (props) => {
  const {post}=props

    return(
   
    <View style={styles.container}>
     
      {/* Image */}
      <Image  style={styles.image} source={{uri:post.image}}></Image>
      {/* Bed & Bedroom*/}
<Text style={styles.bedrooms}> {post.bed} bed {post.bedroom} bedroom</Text>
<Text style={styles.description} numberOfLines={2}>{post.type}
 </Text>
      {/* oldPrice & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={styles.price}>  ${post.newPrice} </Text>
        / night
      </Text>
      {/* total price */}
      <Text style={styles.totalPrice}>${post.totalPrice}</Text>
   
    </View>
 
  )
}

export default Post

const styles = StyleSheet.create({
  container:{
    margin:20
  },image:{
    width:'100%',
    aspectRatio:3/2,
    resizeMode:'cover',
    borderRadius:10
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  price: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  }
})
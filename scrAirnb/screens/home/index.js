import { Alert, ImageBackground, Pressable, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Fontlisto from 'react-native-vector-icons/Fontisto' 
import { useNavigation } from '@react-navigation/native'
const Homescren = () => {
  const navigation =useNavigation();
  return (
    <View>
       {/*Searchbutton   */}
       <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate("Destination Search")}>
        <Image style={styles.iconSearch} source={require('../../assets/images/search.png')} />
        <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>
      {/*ImageBackground  */}
      <ImageBackground style={styles.image} source={require('../../assets/images/wallpaper.jpg')}>
       {/*Tittel   */}
       <Text style={styles.title}>GO NEER</Text>
       <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
       </ImageBackground>
        {/* Button   */}

    </View>
  )
}

export default Homescren

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  searchButton: {
    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen') . width-20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },iconSearch:{
    height:25,
    width:25
  }
})
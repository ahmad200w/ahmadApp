import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import COLORS from '../contest/colors'
import React from 'react'
const {width}=Dimensions.get('screen')
const RecommendedCard = ({place}) => {
  return (
    <ImageBackground style={styles.rmCardImage} source={place.image}>
    <Text
      style={{
        color: COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
      }}>
      {place.name}
    </Text>
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      }}>
      <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
        <Image source={require('../assest/icons/placeholder.png')} style={styles.loc}  />
          <Text style={{color: COLORS.white, marginLeft: 5}}>
            {place.location}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
        <Image source={require('../assest/icons/star.png')} style={styles.loc}   />
          <Text style={{color: COLORS.white, marginLeft: 5}}>5.0</Text>
        </View>
      </View>
      <Text style={{color: COLORS.white, fontSize: 13}}>
        {place.details}
      </Text>
    </View>
  </ImageBackground>
  )
}

export default RecommendedCard

const styles = StyleSheet.create({
    rmCardImage: {
        width: width - 40,
        height: 200,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden',
        padding: 10,
      },loc:{
        width:20,
        height:20
      }
})
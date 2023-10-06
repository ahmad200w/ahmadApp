import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import places from '../contest/places'
import COLORS from '../contest/colors'
const {width} =Dimensions.get('screen')
const Card = ({place}) => {
    
    return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => console.warn('ho')}>
          <ImageBackground style={styles.cardImage} source={place.image} >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              {place.name}
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'flex-end',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../assest/icons/placeholder.png')} style={styles.loc}  />
                <Text style={{marginLeft: 5, color: COLORS.white}}>
                  {place.location}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../assest/icons/star.png')} style={styles.loc}   />
                <Text style={{marginLeft: 5, color: COLORS.white}}>5.0</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      );
}

export default Card

const styles = StyleSheet.create({
    cardImage: {
        height: 220,
        width: width / 2,
        marginRight: 20,
        padding: 10,
        overflow: 'hidden',
        borderRadius: 10,
      },loc:{
        width:20,
        height:20
      }
})
import { View,StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS,FONTS,images,SIZES,icons } from '../constants'


const TextView = (props) => {
    const{name,point} =props
  return (
   
     <View style={styles.body}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <View style={{ marginRight: SIZES.padding }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.white }}>Good Morning</Text>
                        <Text style={{ ...FONTS.h2, color: COLORS.white }}>{props.name}</Text>
                    </View>
                </View>

                {/* Points */}
                <TouchableOpacity
                    style={styles.points}
                    onPress={() => { console.log("Point") }}
                >
                    <View style={styles.viewPlus}>
                        <View style={styles.imagesView}>
                            <Image
                                source={icons.plus_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20
                                }}
                            />
                        </View>

                        <Text style={styles.textPoint}>{props.point} point</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
  
}
const styles = StyleSheet.create({
    body:{ 
        flex: 1,
         flexDirection: 'row',
          paddingHorizontal: SIZES.padding,
           alignItems: 'center'
         },point:{
            backgroundColor: COLORS.primary,
            height: 40,
            paddingLeft: 3,
            paddingRight: SIZES.radius,
            borderRadius: 20
        },viewPlus:{ 
            flex: 1,
             flexDirection: 'row',
              justifyContent: 'center',
               alignItems: 'center'
             },textPoint:{ 
                marginLeft: SIZES.base,
                color: COLORS.white, 
                ...FONTS.body3 
            },imagesView:{
                 width: 30,
                  height: 30,
                   alignItems: 'center', 
                   justifyContent: 'center',
                   borderRadius: 25, 
                   backgroundColor: 'rgba(0,0,0,0.5)'
                }

})

export default TextView
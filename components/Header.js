import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.contaniner}>
        <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: "white",
          borderWidth: 1,
          borderRadius: 25,
          padding: 8,
        }}
      >
          <Image style={styles.imge} source={require('../src/assets/foto/iconsBooking/bed.png')} />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
        stay
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          
        }}
      >
       <Image style={styles.imge} source={require('../src/assets/foto/iconsBooking/direct-flight.png')} />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Flights
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
         
        }}
      >
        <Image style={styles.imge} source={require('../src/assets/foto/iconsBooking/car.png')} />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Car Rental
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
        
         
        }}
      >
      <Image style={styles.imge} source={require('../src/assets/foto/iconsBooking/uber.png')} />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: "bold",
            color: "white",
            fontSize: 15,
          }}
        >
          Taxi
        </Text>
      </Pressable>
   
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    contaniner:{
        backgroundColor: "#003580",
        height: 65,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop:0.2
    }, imge:{width:20,height:20}
   
})
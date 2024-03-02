import { View, Text, StyleSheet, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'

import { ShoppingContext } from '../context/ShoppingsProvider'
import { useDispatch } from 'react-redux'

const FlatlistView = ({data, index}) => {
  const {setCart, cart, total, setTotal, cont, setCont} =
  useContext(ShoppingContext);
    const {width, height} = useWindowDimensions();

  

   
    const handelIncrease = () => {
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) => {
          if (item.id === data.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.newPrice,
            };
          }
          return item;
        });
        return updatedCart;
      });
      setCont((prevCont) => prevCont + 1);
      setTotal((prevTotal) => prevTotal + data.newPrice);
    };
  /*
    const handelDecrease = () => {
      if (data.quantity > 0) {
        setCart((prevCart) => {
          const updatedCart = prevCart.map((item) => {
            if (item.id === data.id && item.count > 0) {
              return {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.totalPrice - item.newPrice,
              };
            }
            return item;
          }).filter((item)=> item.quantity>0);
          return updatedCart;
        });
        setCont((prevCont) => prevCont - 1);
        setTotal((prevTotal) => prevTotal - data.newPrice);
      }
     
    };*/
  
    const handelDecrease = () => {
      if (data.quantity > 0) {
        setCart((prevCart) => {
          const updatedCart = prevCart.map((item) => {
            if (item.id === data.id && item.count > 0) {
              return {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: item.totalPrice - item.newPrice,
              };
            }
            return item;
          }).filter((item)=> item.quantity>0);
          return updatedCart;
        });
        setCont((prevCont) => prevCont - 1);
        setTotal((prevTotal) => prevTotal - data.newPrice);
      }
     
    };
 

  return (
    <View
    style={[styles.item, {width: 0.9 * width, height: height * 0.15}]}>
    <View style={styles.phoneImage}>
      <Image source={data.backgroundImage} style={styles.image} />
    </View>
    <View style={{flexDirection: 'column'}}>
      <Text style={styles.text}>{data.phone}</Text>
      <Text style={styles.text}>{data.newPrice}$</Text>
    </View>
    <View style={styles.preisView}>
      <View style={styles.viewADDminus}>
        <TouchableOpacity onPress={handelIncrease} style={styles.plus} >
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/add.png')}
          />
        </TouchableOpacity  >
        <Text style={styles.textP}>{data.quantity}</Text>
        <TouchableOpacity onPress={handelDecrease} style={styles.minus}>
          <Image
            style={{width: 24, height: 24}}
            source={require('../assets/icons/minus.png')}
          />
        </TouchableOpacity>
       
      </View>
      
    </View>
  </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#FEBE10',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    margin:5,
  },
  phoneImage: {
    backgroundColor: 'white',
    width: 90,
    height: 90,
    borderRadius: 30,
    margin: 10,
  },
  image: {
    width: 90,
    height: 90,
  },
  text: {
    fontSize: 17,
    fontWeight: '900',
    left: 10,
    margin: 5,
  },
  textP: {
    fontSize: 17,
    fontWeight: '900',
    left: 0,
    margin: 5,
  },
  preisView: {
    flexDirection: 'column',
   
  },
  viewADDminus: {
    flexDirection: 'row',
    marginLeft:40
   
  },
  minus: {
   left:5
  },plus:{
   right:5

  },
  totaltext:{
    marginRight:250,
    fontSize:15,
    fontWeight:'800'
  },tPreischeck:{
    marginLeft:2,
    fontSize:15,
    fontWeight:'600'
  }
});
export default FlatlistView
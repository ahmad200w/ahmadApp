import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import cart from '../data/cart';
import CartListItem from '../Components/CartListItem';
import { useSelector } from 'react-redux';
import { selectDeliveryPrice, selectSubTotal } from '../store/cartSlice';
const ShoppingCart = () => {
  
  
  const text ='US$'
  const ShoppingCartTotal =() => {
    const subtotalPreis =useSelector(selectSubTotal);
    const deliveryFee =useSelector(selectDeliveryPrice)
    const dilverPric =10;
  

  return(
    <View style={styles.totalContainer}>
      <View style={styles.row}>
        <Text>subtotal</Text>
        <Text>{subtotalPreis}{text}</Text>
      </View>
      <View style={styles.row}>
        <Text>Delivery</Text>
        <Text>{deliveryFee} {text}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text>{subtotalPreis+deliveryFee} {text}</Text>
      </View>
    </View>
  )}
  const cartItems = useSelector((state)=>state.cart.items)
  return (
    <>
    <FlatList
      data={cartItems}
      renderItem={({item}) => <CartListItem cartItem={item} />}
      ListFooterComponent={ShoppingCartTotal}
    />
    
    <Pressable style={styles.button}  >
  <Text style={styles.buttonText}>Checkout</Text>
    </Pressable>
    </>
  );
};

export default ShoppingCart;

const styles = StyleSheet.create({
  totalContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  textBold: {
    fontSize:16,
    fontWeight: '500',
  },button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 20,
  },
});

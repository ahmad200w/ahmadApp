import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import data from '../assets/data';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {ShoppingContext} from '../context/ShoppingsProvider';
import Navi from '../router/Navi';
import FlatlistView from '../Components/FlatlistView';

const CartScreen = () => {
  const navigation = useNavigation();

  const {cart, total} =
    useContext(ShoppingContext);
  const {width, height} = useWindowDimensions();
  const [product, setProduct] = useState();

  //  حتى لايتكرر العنصر في  cart اكثر من مرة ....
  const uniqueCart = Array.from(new Set(cart.map(item => item.id))).map(
    (id, index) => {
      return cart.find(item => item.id === id);
    },
  );

  // component ....
  const sendOrdersDatails = uniqueCart.map(item => {
    return {
      phoneType: item.phone,
      quantity: item.quantity,
      total: total
    };
  });
  /////


  return (
    <SafeAreaView>
      <View style={[styles.container, { width: width, height: height }]}>
        <View style={styles.listContainer}>
          <FlatList
            data={uniqueCart}
            renderItem={({ item }) => (
              <FlatlistView data={item} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>{total}$</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.homeButton}>
              <Text style={styles.buttonText}>Back to Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('payments', { sendOrdersDatails, total })}>
            <View style={styles.doneButton}>
              <Text style={styles.buttonText}>Done</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    height: '80%',
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  totalLabel: {
    marginRight: 250,
    fontSize: 15,
    fontWeight: '800',
  },
  totalAmount: {
    marginLeft: 2,
    fontSize: 15,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  homeButton: {
    width: 150,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'black',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButton: {
    width: 150,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'black',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
  },
});
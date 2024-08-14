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
  const printProduct = uniqueCart.map(item => {
    return {
      phoneType: item.phoneType,
      quantity: item.quantity,
      total: total
    };
  });
  /////


  return (
    <SafeAreaView>
      <View style={[styles.container, {width: width, height: height}]}>
        <View 
          style={{width: width, height: height * 0.8, alignItems: 'center'}}>
          <FlatList
            data={uniqueCart}
            renderItem={({item}) =>(
              <FlatlistView
                data={item}
           
              />
            )}
            keyExtractor={(item)=> item.id}
          />
        </View>
         <View style={{flexDirection: 'row'}}>
          <Text style={styles.totaltext}> total</Text>
          <Text style={styles.tPreischeck}> {total}$</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={styles.goBackToHome}>
              <Text style={styles.textKnopf}>BackToHome</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('payments',{printProduct,total})}  >
            <View style={styles.goBackToHome}>
              <Text style={styles.textKnopf}>done</Text>
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
  item: {
    backgroundColor: '#609EA2',
    borderRadius: 12,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    margin: 5,
  },
  phoneImage: {
    backgroundColor: '#332C39',
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
    marginLeft: 40,
  },
  minus: {
    left: 5,
  },
  plus: {
    right: 5,
  },
  totaltext: {
    marginRight: 250,
    fontSize: 15,
    fontWeight: '800',
  },
  tPreischeck: {
    marginLeft: 2,
    fontSize: 15,
    fontWeight: '600',
  },
  goBackToHome: {
    width: 150,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'black',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textKnopf: {
    color: 'white',
    fontSize: 15,
    fontWeight: '900',
  },
});

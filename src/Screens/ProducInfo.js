import {
  Alert,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import data from '../assets/data';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ShoppingContext } from '../context/ShoppingsProvider';

const ProducInfo = () => {
  const {addtoCart}=useContext(ShoppingContext)
  const navigation = useNavigation();

  const [product, setProduct] = useState({});
  const {width, height} = useWindowDimensions();
  const route = useRoute();
  const id = route.params.id;
 



  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flexDirection:'column',alignItems:'center'}}>
        <FlatList
          keyExtractor={item => item.id}
          data={data[id].images}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item}) => {
            return (
              <Image style={[styles.imag, {width: width}]} source={item} />
            );
          }}
        />
        <View style={{padding: 20}}>
          {/* Title */}
          <Text style={styles.title}>{data[id].phone}</Text>

          {/* Price */}
          <Text style={styles.price}>${data[id].newPrice}</Text>

          {/* Description */}
          <Text style={styles.description}>{data[id].description}</Text>
        </View>
        <Text>paasen zu diesem Gerät</Text>
        <View style={styles.zubehoere}>
          
        </View>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <View style={styles.bottomView}>
        <Pressable onPress={() => addtoCart(data[id])} style={styles.button1}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('cart')}
          style={styles.button2}>
          <Text style={styles.buttonText}>Go to Cart</Text>
        </Pressable>
      </View>

      {/* Navigation icon */}
    </SafeAreaView>
  );
};

export default ProducInfo;

const styles = StyleSheet.create({
  imag: {
    aspectRatio: 1,
  },
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  bottomView: {
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    bottom: 15,
  },

  button1: {
    backgroundColor: 'black',
    bottom: 15,
    width: '45%',

    padding: 20,
    borderRadius: 100,
  },
  button2: {
    backgroundColor: 'black',
    bottom: 15,
    width: '45%',

    padding: 20,
    borderRadius: 100,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },zubehoere:{
    backgroundColor:'black',
    width:300,
    height:250,
    borderRadius:30,
    marginBottom:70,
    margin:10
  }
});

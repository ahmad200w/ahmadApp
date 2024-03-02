import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import watchs from '../assets/watchs';
import { ShoppingContext } from '../context/ShoppingsProvider';

const Add = () => {
    const {addtoCart}=useContext(ShoppingContext)
  const addData = watchs;
  

  const scroll = ({item,index}) => {
    return (
      <View style={styles.body}>
        <Image style={styles.ProductImage} source={item.backgroundImage} />
        <View style={styles.textAndToch}>
        <Text style={styles.textPrice}>{item.newPrice}$</Text>
          <TouchableOpacity
            style={styles.kreis}
            onPress={() => addtoCart(item)}>
              <Image style={styles.imageSize} source={require('../assets/basket.png')}/>
            </TouchableOpacity>

         
        </View>
      </View>
    );
  };

  
  return (
    <View style={styles.container}>
      <FlatList
     
        data={addData}
        key={item => item.id}
        renderItem={scroll}
        horizontal
      />
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 300,

    padding: 15,
    marginTop: 4,

  
    marginBottom: 40,
  },
  body: {
    width: 250,
    height: 250,
    marginLeft: 10,
  },
  ProductImage: {
    width: 250,
    height: 250,
    backgroundColor: 'black',
    borderRadius:15
  },
  textAndToch: {
    position: 'absolute',
    marginTop: 150,
    marginLeft:90,
   
    flexDirection:'row',
  
  },
  textPrice: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
    right:80
   
  },
  kreis: {
    width: 40,

    height: 40,
    backgroundColor: 'white',
    borderRadius: 30,
   left:15,
   marginTop:20,
   justifyContent:'center',
   alignItems:'center'
  
  },imageSize:{
    width:30,
    height:30
  }
});

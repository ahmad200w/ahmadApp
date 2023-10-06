
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";


const CartListItem = ({ cartItem }) => {
  const dispatch =useDispatch();
  const increaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({productId:cartItem.product.id,amount: +1}))
    
  };

  const decreaseQuantity = () => {
    dispatch(cartSlice.actions.changeQuantity({productId:cartItem.product.id,amount: -1}))
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.product.image }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
        <Pressable onPress={decreaseQuantity}>
          <Image  style={{width:25,height:25}}source={require('../assest/foto/minus.png')}/>

          </Pressable>
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Pressable onPress={increaseQuantity} >
          <Image  style={{width:25,height:25}}source={require('../assest/foto/add.png')}/>

          </Pressable>
        
          <Text style={styles.itemTotal}>{cartItem.product.price *cartItem.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: "40%",
    aspectRatio: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: "gray",
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    color: "gray",
  },
  footer: {
    marginTop: "auto",
    flexDirection: "row",
    alignItems: "center",
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: "auto",
    fontWeight: "500",
  },
});

export default CartListItem;

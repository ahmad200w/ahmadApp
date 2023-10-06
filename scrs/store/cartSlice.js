import {createSelector, createSlice} from '@reduxjs/toolkit';
import products from '../data/products';

const initialState = {
  items: [],
  deliveryFrom: 20,
  freeDeliveryFrom: 200,
  subtotal: 0,
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(
        item => item.product.id == newProduct.id,
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({product: newProduct, quantity: 1});
      }
    },
    changeQuantity: (state, action) => {
      const {productId, amount} = action.payload;
      const cartItem = state.items.find(item => item.product.id == productId);
      if (cartItem) {
        //cartItem.quantity=Math.max(0,cartItem.quantity+amount)
        cartItem.quantity = cartItem.quantity + amount;
      }
      if (cartItem.quantity <= 0) {
        state.items = state.items.filter(item => item !== cartItem);
      }
    },
  },
});
export const selectNumberOfItems = state => state.cart.items.length;
export const selectSubTotal = state =>
  state.cart.items.reduce(
    (sum, cartItem) => sum + cartItem.product.price * cartItem.quantity,
    0,
  );
const cartSelector = state => state.cart;
export const selectDeliveryPrice = createSelector(
  cartSelector,
  selectSubTotal,
  (cart,subtotal) =>
    (subtotal > cart.freeDeliveryFrom ?   0: cart.deliveryFrom)
  
    
  )

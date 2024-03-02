
import React, { useCallback, useEffect } from 'react';
import  {createContext, useContext, useState} from 'react'
const ShoppingContext = createContext();
import data from '../assets/data';

const ShoppingsProvider = ({children}) => {
 
  const [total, setTotal] = useState(0);
  const [detai,setDatai]=useState(data)
  const [cart,setCart]=useState([])
  const [cont, setCont] = useState(0);


  { /*
  const addtoCart = useCallback (item =>{
   
    const itemIndex =cart.findIndex(cartItem =>cartItem.id===item.id);
  if(itemIndex!==-1){
    return
  }

     const newItem =[...cart,item]
    


      setCart(newItem) 
      const totalpreis=()=>{
        let sum=0;
        newItem.forEach(element => {
           sum+= element.newPrice;
          
        });

      
        setTotal(sum)
       }
       totalpreis()
    },[cart,setCart]) 

    useEffect(()=>{
   
       setTotal()
  
  
  
     },[])
    */}
 const addtoCart = useCallback(item => {
  // to check if item inside the cart
      const itemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
  
      if (itemIndex !== -1) {
        setCart(prevCart => {
          const updatedCart = prevCart.map((cartItem, index) => {

          
            if (index === itemIndex) {
              return {
                // alle items sind darin 
                ...cartItem,
                cont: cartItem.quantity + 1,
                totalPrice: cartItem.totalPrice + cartItem.newPrice
              };
            }
            return cartItem;
          });
          return updatedCart;
        });
        setTotal(prevTotal => prevTotal + item.newPrice);
      } else {
        const newItem = { ...item, count: cont+1, totalPrice: item.newPrice };
        setCart(prevCart => [...prevCart, newItem]);
        setCont(prevCont => prevCont + 1);
        setTotal(prevTotal => prevTotal + item.newPrice);
      }
    }, [cart, setCart, setCont, setTotal]);
  return (
    <ShoppingContext.Provider
      value={{addtoCart,data,cont, setCont, total, setTotal,setCart,cart}}>
      {children}
    </ShoppingContext.Provider>
  );
}
export {ShoppingContext};

export default ShoppingsProvider;

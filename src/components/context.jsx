import {createContext, useState, useEffect} from 'react'
import {flashSale, recent} from '../constant'

export const ShopCart = createContext(null)

function CartContext({children}) {
    const [productArray, setProductArray] = useState([])
    const [loading, setLoading] = useState(false)
    const [cartItems, setCartItems] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
          try {
            const response = await fetch("/api/products?organization_id=92d5bd3aec3f4257846b5d8fe0ba9b99&reverse_sort=false&page=1&size=10&Appid=MSXNR22706370IM&Apikey=929295486d704094906c71a55d4e44ee20240712132529573435");
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setProductArray(result.items); 
          } catch (error) {
            console.log(error); 
          } finally{
            setLoading(false)
          }
        };
        fetchData();
      }, [])

      useEffect(() => {
        if (productArray.length > 0) {
          const getDefaultCart = () => {
            let cart = {};
            for (let i = 1; i < productArray.length + 1; i++) {
              cart[i] = 0;
            }
            return cart;
          };
    
          setCartItems(getDefaultCart());
        }
      }, [productArray])


      if(loading){
        <h3>loading....</h3>
      }

    // const productArray = [...flashSale, ...recent]
    console.log(productArray, productArray.length);

    // const getDefaultCart = ()=>{
    //     let cart = {}
    //     for(let i =1; i < productArray.length + 1; i++){
    //         cart[i] = 0
    //     }
    //     return cart;
    // }
    // const [cartItems, setCartItems] = useState(getDefaultCart())

    // const addToCart = (itemId)=>{
    //     setCartItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    // }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }
    
    const addToCart = (itemId) => {
        const specifiedItem = productArray.find((element) => element.id === itemId);
    
        if (specifiedItem) {
            setCartItems((prevCartItems) => {
                if (!Array.isArray(prevCartItems)) {
                    prevCartItems = [];
                }
    
                const existingItem = prevCartItems.find((item) => item.id === itemId);
    
                if (existingItem) {
                    return prevCartItems.map((item) =>
                        item.id === itemId ? { ...item, amount: item.amount + 1 } : item
                    );
                } else {
                    return [...prevCartItems, { ...specifiedItem, amount: 1 }];
                }
            });
        }
    };
    
    
    console.log(cartItems);

    const contextValue = {cartItems, addToCart, removeFromCart, productArray}

  return (
    <ShopCart.Provider value={contextValue}>
        {children}
    </ShopCart.Provider>
  )
}

export default CartContext
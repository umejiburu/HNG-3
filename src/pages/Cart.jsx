import {useContext} from 'react'
import { ShopCart } from '../components/CartContext'
import { CartItem, RecentSale } from '../components'
import { Link } from 'react-router-dom'

function Cart() {
    const {cartItems, productArray} = useContext(ShopCart)
    const hasItemsInCart = cartItems.some(count =>{
      return count.amount > 0
   })
  return (
     <div className='container px-8'>
        {cartItems.map((product) => {
            if(cartItems[product.id] !== 0){
                return <CartItem key={product.id} data={product}/>
            }
        })}
        {hasItemsInCart  ? <Link to='/checkout' className='text-white border bg-[#004D75] rounded-full block text-center p-1'>Proceed to checkout</Link> : <h3 className='text-center text-red-600 text-4xl'>No cart added</h3>}
        <RecentSale heading='More to explore' />
    </div>
   
  )
}

export default Cart
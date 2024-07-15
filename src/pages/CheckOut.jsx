import { LuShoppingCart } from "react-icons/lu";
import { VscServerProcess } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa6";
import mastercard from '../assets/mastercard.png'
import paypal from '../assets/PayPal.png'
import { useContext } from "react";
import { ShopCart } from "../components/CartContext";

function CheckOut() {
  const {cartItems, productArray} = useContext(ShopCart)
  let amountLength = 0
  const cartLength = productArray.map((prod)=> {
      amountLength = cartItems[prod.id] > 0
      console.log(amountLength);
  })
  return (
    <div className="pt-10 mx-auto max-w-[1024px]">
      <div className="flex justify-center items-center ">
        <i className="bg-[#D6F1FF] rounded-full p-1">
          <LuShoppingCart className="text-[#004D75]" />
          </i>
      <hr className="w-10 place-self-center border-[#0E6999]"/>
      <i className="bg-[#D6F1FF] rounded-full p-1">
       <VscServerProcess className="text-[#004D75]"/>
      </i>
      <hr className="w-10 place-self-center"/>
      <i className="bg-[#F8F8F8] rounded-full p-1">
        <FaCheck className="text-[#6A737E]" />
      </i>
      </div>
      <div className=" lg:flex items-center justify-between lg:gap-3">
        <div className=" p-4 lg:w-full">
          <div className="">
            <h3>Select a delivery address</h3>
            <div className="bg-[#B7B7B7] rounded-lg p-6">
              <div>
                <form className="flex gap-2 font-bold">
                  <input type="radio" name=""id="opeyemi" className="w-5" />
                  <label>Opeyemi Solaru</label>
                </form>
                <p className="px-6">R132 Road 17 Fountain    Springville Estate, Off Monastery Road, Sangotedo Lagos State
                </p>
              </div>
            <hr className="border-[#D9D9D9] my-2" />
            <div>
                <form className="flex gap-2">
                  <input type="radio" name="" id="" className="w-5" />
                  <label className="font-bold">Ukwujede Dorcas</label>
                </form>
                <p className="px-6">33, Ramiat Timpson Street, Aguda Lagos State.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-4" id="choose payment">
            <h3>Choose Payment Method</h3>
            <div className="">
              <form action="" className="bg-[#B7B7B7] py-4 rounded-md  flex flex-col items-center">
                <div className="flex gap-2 ">
                  <input type="radio" name="" id="" className="w-5 -ml-20" />
                  <div className="flex">
                    <img src={mastercard} alt="" width={20} />
                    <p className="font-bold">Debit/Credit Card</p>
                  </div>
                </div>
                <div className="">
                <label htmlFor="name">Name</label><br/>
                <input type="text" id="name" className="border border-black rounded-md mb-2 bg-[#B7B7B7] outline-none pl-2" /><br/>
                <label htmlFor="number">Card Number</label><br/>
                <div className="relative">
                 <input type="text" id="number" className="border border-black rounded-md bg-[#B7B7B7] outline-none pl-2 " />
                 <img src={mastercard} width={20} alt="" className="absolute right-5 top-1" />
                </div>
                <div className="flex justify-between gap-2 pt-2">
                  <div>
                    <label htmlFor="date">Expiry Date</label><br/>
                    <input type="text" id="date" placeholder="MM/YY" className="w-24 bg-[#B7B7B7] border border-black rounded-md px-2 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="cvv">CVV</label><br/>
                    <input type="text" id="cvv" placeholder="..."className="w-24 bg-[#B7B7B7] border border-black rounded-md px-2 outline-none" />
                  </div>
                </div>
                <div className='flex items-center gap-1 pt-1'>
                  <input type="checkbox" name="" id="" className="h-3" />
                  <label className=" font-bold text-xs" htmlFor="">Save this card for later use</label>
                </div>
                </div>

              </form>
              <div className="flex items-center py-2 px-6 gap-2 bg-[#B7B7B7] mt-3 rounded-md">
                  <input type="radio" name="" id="" className="w-5" />
                    <img src={paypal} alt="" className="w-28" />
              </div>
             
            </div>
          </div>
        </div>
        <div className="lg:w-full">
          <div className="p-4">
            <h3>Order Summary</h3>
            <div className="bg-[#B7B7B7] rounded-md p-3 ">
            {productArray.map((product) => {
            if(cartItems[product.id] !== 0){
                return (
                  <div key={product.id} className="flex justify-between lg:gap-4 items-center py-3 ">
                    <div className="border py-1 h-16 w-20 max-w-28 rounded-md mb-2 relative">
                        <img src={product.image} alt="" width={40} height={40} className="mx-auto" />
                      <p className="absolute -top-2 -right-2  border rounded-full w-6 bg-white shadow-md shadow-black/70 text-center">{cartItems[product.id]}</p>
                    </div>
                    <div>
                      <p className="font-bold text-lg pb-1">{product.title}</p>
                      <p>Midnight Blue</p>
                    </div>
                    <p className="font-bold">{product.price}</p>
                  </div>
                )
            }
        })}
            </div>
          </div>
          <div className="p-4 ">
            <div className="bg-[#B7B7B7] rounded-md p-2">
            <h3>Price Details (3 Items)</h3>
            {productArray.map((product) => {
            if(cartItems[product.id] !== 0){
                return (
                  <div key={product.id} className="flex items-center justify-between">
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                  </div>
                )
            }
        })}
        <hr/>
        <div>
          <h3>Total Amount</h3>
          <p></p>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckOut
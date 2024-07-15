import {useContext, useState} from 'react'
import { FaSquareFull } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";
import { ShopCart } from './CartContext';
import { MdDeleteOutline } from "react-icons/md";

function CartItem({data}) {
    const {removeFromCart, cartItems, increaseQuantity, deleteFromCart} = useContext(ShopCart)
    const [imageThumb, setImageThumb] = useState(null)
    const [imageStatus, setImageStatus] = useState(false)
    const [selectedId, setSelectedId] = useState(null)

    const handleImage = (imageId) =>{
        if(imageId >= 0 && imageId < data.thumbnails.length){
        setImageThumb(data.thumbnails[imageId])
        setImageStatus(true)
        setSelectedId(imageId)
        }
    }

  return (
    <div className='flex items-center justify-between my-16'>
        <div className='w-2/6 flex flex-col items-center relative'>
           <div className=' bg-[#D9D9D9]/40 w-80 h-80 flex items-center place-self-center rounded-lg'>
                <img
                src={`https://api.timbu.cloud/images/${data.photos[0]?.url}`}
                //   src={imageStatus ? imageThumb : data.image}
                  className='object-cover cursor-pointer  hover:drop-shadow-xl hover:scale-125 transition ease-in-out duration-300 w-[170px] mx-auto '
                  alt={data.title}
                />
            </div>
            <div className='flex gap-4 px-4 py-4 absolute -bottom-11 bg-[#F5F6F6] rounded-xl'>
                {data.thumbnails?.map((item, index) =>(
                    <div  key={index } className={`bg-[#EAEAEA] rounded-lg w-16 h-16 flex items-center justify-center ${selectedId === index && 'bg-[#F5F6F6] border border-[#004D75]'}`} onClick={()=>handleImage(index)}>
                      <img src={item} alt="" width={40} className='object-cover' />
                    </div>
                ))}
            </div>
        </div>
        <div className=' w-2/5 h-80'>
            <h3>{data.title}</h3>
            <div className='flex justify-between'>
                <p className='text-[#B7B7B7]'>{data?.color ? data?.color : 'Alphine Green'}</p>
                <p className=' font-bold text-sm'>Available Color <span className='flex gap-2 justify-center'>
                    <FaSquareFull className=' fill-slate-800'/>
                    <FaSquareFull className=' fill-red-700' />
                    <FaSquareFull className=' fill-amber-950' />
                </span>
                </p>
            </div>
            <p className='font-bold'>NGN{data.current_price ? data.current_price[0].NGN[0].toLocaleString() : '2,000,000'}</p>
            <p className='line-through text-[#B7B7B7]'>NGN{data?.discount ? data.discount.toLocaleString() : '2,400,000'}</p>
            <p className='text-[#B7B7B7]'>{data.description}</p>
            <div className='flex items-center justify-between'>
                <div className='flex justify-between w-20 my-3'>
                    <button className=' bg-slate-100 px-1 text-[#004D75]' onClick={()=> removeFromCart(data.id)}><TiMinus /></button>
                    <p>{data?.amount}</p>
                    <button className=' bg-slate-100 px-1 text-[#004D75]' onClick={()=>increaseQuantity(data.id)}><TiPlus /></button>
                </div>
                <MdDeleteOutline onClick={()=>deleteFromCart(data.id)} className='bg-slate-100 p-1 rounded-full text-xl fill-[#004D75] hover:scale-110 transition duration-300 ease-in-out' />
            </div>
        </div>
    </div>
  )
}

export default CartItem
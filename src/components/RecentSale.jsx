import { useState, useContext } from 'react';
import { recent } from '../constant';
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { MdStarRate, MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";
import { ShopCart } from './CartContext';

function RecentSale({heading}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {addToCart, cartItems} = useContext(ShopCart)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recent .length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + recent .length) %recent .length);
  };

  return (
    <div>
      <div className='flex justify-between px-8 py-4 font-bold mb-4'>
        <p>{heading ? heading : 'Recently Viewed'}</p>
        <div>
          <button className='opacity-50 cursor-pointer hover:opacity-100 hover:bg-[#004D75] hover:text-white border border-[#004D75] px-1 mr-1' onClick={handlePrev} disabled={currentIndex === 0}>
            <IoArrowBackOutline />
          </button>
          <button className='opacity-50 cursor-pointer hover:opacity-100 hover:bg-[#004D75] hover:text-white border border-[#004D75] px-1' onClick={handleNext}>
            <IoArrowForwardOutline />
          </button>
        </div>
      </div>
      <div className='relative overflow-hidden'>
        <div
          className={`flex transition-transform duration-500 ease-in-out pl-8`}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          // style={{transform: ``}}
        >
          {recent .map((item) => (
            <div key={item.id} className='flex flex-col items-start justify-between mr-4 relative'>
              <div className=' bg-slate-100 w-60 h-60 flex items-center place-self-center'>
                <img
                  src={item.image}
                  className='object-cover cursor-pointer  hover:drop-shadow-xl hover:scale-105 transition ease-in-out duration-300 w-[150px] mx-auto '
                  alt={item.title}
                />
              </div>
              <i className='absolute right-5 top-4 bg-slate-300 rounded-full p-1'>
              {!item.star ? <MdOutlineFavorite className='fill-[#D74949]' /> :  <MdFavoriteBorder className=' hover:fill-[#D74949]' />}
              </i>
              <div className=" w-full flex justify-between pr-2">
              <p className='font-bold'>{item.title}</p>
              <span className='flex items-center'>4.5 <MdStarRate className={`${item?.star ? 'fill-yellow-300/65' : 'fill-slate-300'}`} /></span>
              </div>
              <p className='font-bold'>NGN{item?.price ? item.price.toLocaleString() : '2,000,000'}</p>
              <button className='bg-[#004D75] text-white px-2 py-1 rounded-lg' onClick={()=>addToCart(item.id)}>Add to cart {cartItems[item.id] > 0 && <>({cartItems[item.id]})</>}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentSale;
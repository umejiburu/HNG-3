import { NavLink } from 'react-router-dom'
import logo from '../assets/GadgSmart.png'
import { IoIosSearch } from "react-icons/io";
import { LiaShoppingCartSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";
import { IoMenuSharp, IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenu = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='container px-2 md:px-8 py-5'>  
      <div className='flex items-center md:place-content-between relative md:gap-8'>
        <div className=' w-16 lg:w-28 lg:max-w-28 pr-2 md:pr-0'>
        <img src={logo} alt="" />
        </div>   
        <div className={`${isOpen ? 'flex flex-col-reverse z-10 w-full absolute top-0 right-8 gap-8  bg-blue-50 py-3' : 'hidden'}  md:flex md:gap-3 items-center lg:gap-9`}>
          <NavLink to='/' end className={({ isActive}) =>
          (isActive ? " bg-[#004D75] rounded-full p-1 text-white" : "hover:text-lg")
          }>Home</NavLink>
          <NavLink to='categories'>Categories</NavLink>
          <NavLink to=''>Whats New</NavLink>
          <NavLink to=''>Wishlist</NavLink>
          <IoCloseOutline onClick={handleMenu} className={`${isOpen ? 'block translate-x-28 text-xl -translate-y-2' : 'hidden'}`} /> 
        </div>
        <div className='flex items-center gap-3 md:gap-8'>
          <div className=' bg-slate-300  rounded-full flex items-center px-3'>
          <input type="text" placeholder='Search Product' className=' bg-slate-300 w- rounded-full border-none outline-none w-20 lg:w-auto' />
          <IoIosSearch />
          </div>
          <p className='lg:flex items-center hidden'> 
            <i ><CgProfile /></i> Account
          </p>
          <Link to='/cart' className='flex items-center'>
            <i><LiaShoppingCartSolid /></i> cart
          </Link>
          <i onClick={handleMenu} className='md:hidden '>{!isOpen && <IoMenuSharp />}</i>
        </div>
      </div> 
    </div>
  )
}

export default Header
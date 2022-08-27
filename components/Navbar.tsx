import Image from 'next/image';
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import React from 'react'
import nav from '../public/navlogo.png';

const Navbar = () => {
  return (
    <div className='w-full  cursor-pointer flex-col flex '>
        <div className='flex justify-end p-2 text-xl font-bold text-white w-full bg-[#131111de]'>SONY</div>
        <div className='bg-slate-100 w-full justify-between flex items-center p-4'>
            {/* left section */}
            <div className='flex md:hidden  space-x-3'>
            <AiOutlineMenu size={25} />
            <AiOutlineSearch size={25} />
            </div>
        <div className='flex items-center'>
        <Image src={nav} width='39px' height='39px' objectFit='contain' />
        <div className='md:flex text-sm hidden text-black  space-x-6  font-semibold ml-4'>
            <span>Games</span>
            <span>Hardware</span>
            <span>Services</span>
            <span>News</span>
            <span>Shop</span>
            <span>Support</span>
        </div>
        
        </div>
        <div className='flex space-x-4'>
            <button className='bg-[#000000de] text-white px-3 rounded-full'>Sign in</button>
            <div className='flex  space-x-3'>
            <AiOutlineSearch size={25} />
            </div>
            
        </div>
        </div>
        
        
    </div>
  )
}

export default Navbar
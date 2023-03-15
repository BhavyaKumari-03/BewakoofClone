import React from 'react'
import {AiOutlineHeart,AiOutlineSearch} from "react-icons/ai"
import {BsBag} from "react-icons/bs"
import Page1 from './Page1'
import Route from './Route'
// import {Link} from 'react-router-dom'
export default function Editor() {
  return (
    <>
    <div className="page-container  w-full h-[70px] sticky top-0 z-50 ">
    <Page1/>
        <ul className='flex justify-around  items-center h-full bg-white '>

            <div className='flex ml-24  '>
                <li className='pr-4' ><img className='w-[150px]' src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg" alt="" /></li>
                <li  className='pr-4'>MEN</li>
                <li className='pr-4'>WOMEN</li>
                
                <li className='pr-4'>MOBILE COVERS </li>
            </div>

            <div className='flex items-center '>
                <div className='w-[320px] flex items-center bg-slate-300 py-[5px] '>
                    <AiOutlineSearch size={20}/>
                    <input  className="border-none border-black w-[95%] bg-slate-300 p-1" type="text" name="" id="" placeholder='Search By Product,category or collection'/>
                </div>
                <div className='pl-4'>
                    <li>Login</li>
                </div>
                <li className='pl-4 flex justify-between'><AiOutlineHeart/></li>
                <li className='pl-4 flex justify-between '><BsBag/></li>
            </div>
        </ul>
        <Route/>
    </div>
    </>
  )
}

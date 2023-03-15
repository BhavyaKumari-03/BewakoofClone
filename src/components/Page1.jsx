import React from 'react'

export default function page1() {
  return (
    <>
    <div className="page-container bg-slate-300 w-full h-[30px] sticky top-0 ">
        <ul className='flex justify-around '>

            <div className='flex ml-14'>
                <li className='pr-4'>offers</li>
                <li className='pr-4'>Fanbook</li>
                <li className='pr-4'>Download the App</li>
                <li className='pr-4'>Tribe MemberShip </li>
            </div>

            <div className='flex mr-24'>
                <li className='pr-2'>Contact</li>
                <li className='pr-2'>Track Order</li>
            </div>
        </ul>
    </div>
    </>
  )
}

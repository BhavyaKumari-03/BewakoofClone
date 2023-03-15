import React from 'react'
import { AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter, AiOutlineApple } from 'react-icons/ai'
import { RiPinterestFill } from 'react-icons/ri'
import { BsSnapchat } from 'react-icons/bs'
import { TbTruckReturn, TbCoinRupee } from 'react-icons/tb'


export default function Footer() {
    return (
        <>
            <div className='bg-black text-white'>
                <h1 className='pt-7 pl-12 text-3xl text-yellow-400 '>Bewakoof®️</h1>
                <div className='flex gap-2 justify-around pt-20 '>
                    <div>

                        <h1 className='mb-2 font-bold text-yellow-400'>CUSTOMER SERVICE</h1>
                        <ul>
                            <li>Contact Us</li>
                            <li>Track Order</li>
                            <li>Return Order</li>
                            <li>Cancel Order</li>

                            <div className='flex gap-2 justify-content flex-col pt-10'>
                                <div className='flex gap-2 items-center'><TbTruckReturn />  15 Days return policy*</div>

                                <div className='flex gap-2 items-center'><TbCoinRupee />  Cash on delivery*</div>

                            </div>
                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-2 font-bold text-yellow-400'>COMPANY</h1>
                        <ul>
                            <li>About Us</li>
                            <li>We're Hiring</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Blog</li>
                            <div className='flex gap-2 justify-item pt-5 flex-col'>
                                <h1 className='mb-2 font-bold text-yellow-400'>DOWNLOAD THE APP</h1>
                                <div >
                                    <ul>
                                        <li className='flex'>
                                            <a href="/" tabIndex="0"><img class="w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45" /></a>
                                            <a href="/" tabIndex="0"><img class="w-20" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-2 font-bold text-yellow-400'>CONNECT WITH US</h1>
                        <ul>
                            <li><div className='flex items-center gap-2'>
                                <AiFillFacebook /><span>4.7M People Like this</span>
                            </div></li>

                            <li><div className='flex items-center gap-2'>
                                <AiOutlineInstagram /> <span> 1M Followers</span> 
                                </div></li>
                            <div className='flex gap-5 items-center m-px'>
                                <AiOutlineTwitter />
                                <RiPinterestFill />
                                <BsSnapchat />
                                <AiOutlineApple />
                            </div>
                            <div>
                                <div className='pt-14'>
                                    <h1 className='mb-2 font-bold text-yellow-400'>100% SECURE PAYMENT</h1>
                                    <ul>
                                        <li>
                                            <img src="https://images.bewakoof.com/web/secure-payments-image.png" alt="" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ul>
                    </div>
                    <div>
                        <h1 className='mb-2 font-bold text-yellow-400'>KEEP UP TO DATE</h1>
                        <ul>
                            <div>
                                <input className="border-2 border-black" type="text" name="" id="" placeholder='Enter Email Id' />
                                <button className='bg-yellow-400 text-black'>Subscribe</button>
                            </div>

                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

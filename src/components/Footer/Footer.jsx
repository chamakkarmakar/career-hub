import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-purple-950 mt-20 pt-20 md:px-28 px-14 text-gray-300'>
            <div className='flex md:flex-row flex-col md:justify-between justify-center items-center'>
                <div className='md:w-1/4 w-auto'>
                    <h2 className='font-bold text-3xl text-white'>Jobly</h2>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>

                    <div className='flex justify-around items-center mt-3 md:me-20'>
                        <FaFacebook className='w-7 h-7 text-white' />
                        <IoLogoTwitter className='w-7 h-7 text-white' />
                        <FaInstagram className='w-7 h-7 text-white' />
                    </div>
                </div>
                <div className='md:w-3/5 w-auto grid md:grid-cols-4 grid-cols-2 gap-10 md:mt-0 mt-5'>
                    <div>
                        <h3 className='font-semibold text-xl mb-2 text-white'>Company</h3>
                        <ul>
                            <li>About us</li>
                            <li>Work</li>
                            <li>Latest News</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mb-2 text-white'>Product</h3>
                        <ul>
                            <li>Prototype</li>
                            <li>Plans & Pricing</li>
                            <li>Customers</li>
                            <li>Integration</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mb-2 text-white'>Support</h3>
                        <ul>
                            <li>Help Desk </li>
                            <li>Sales </li>
                            <li>Become a Partner </li>
                            <li>Developers</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='font-semibold text-xl mb-2 text-white'>Contact</h3>
                        <ul>
                            <li>524 Broadway, NYC </li>
                            <li>+1777-978-5570</li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className='my-5' />
            <div className='py-2 text-center'>
                <p>© <span className='font-semibold'>Jobly</span> {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer

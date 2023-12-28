import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {
    const navItems = [
        {
            item: "Home",
            to: "/"
        },
        {
            item: "Applied Jobs",
            to: "/applied"
        },
        {
            item: "Blog",
            to: "/blog"
        },
        {
            item: "Contact Us",
            to: "/contact"
        }


    ];
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="sticky top-0 bg-purple-950 text-white py-3 flex justify-between md:items-center">
            <header className='ms-10'>
                <h1 className='text-3xl font-extrabold'>JOBLY</h1>
            </header>
            <div className='grid grid-cols-3 md:gap-x-20 gap-x-7 place-items-center'>
                <div className='md:col-span-2 order-last'>
                    <div className='md:hidden me-8 cursor-pointer' onClick={() => setToggleMenu(!toggleMenu)}>
                        {
                            !toggleMenu ? <GiHamburgerMenu /> : <RxCross1 />
                        }
                    </div>
                    <div className={`md:static py-3 md:py-0 md:w-auto w-full flex md:flex-row flex-col items-center absolute right-0 bg-purple-950 delay-150 duration-500 ease-in-out ${toggleMenu ? 'top-14' : '-top-56'}`}>
                        {
                            navItems.map((item, index) => <Link className='px-3 py-1 ms-8 uppercase delay-200 duration-300 font-semibold ease-in-out hover:underline hover:underline-offset-8 ' key={index} to={item.to}>{item.item}</Link>)
                        }
                    </div>
                </div>
                <div className='border border-slate-100 md:order-last md:col-span-1 col-span-2'>
                    <HashLink to="/#jobs">
                        <button className='text-base md:px-5 px-2 py-1 font-bold hover:bg-red-50 hover:text-purple-950'>Start for Job</button>
                    </HashLink>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

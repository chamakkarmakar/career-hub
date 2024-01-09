import React from 'react'
import banner from '../../assets/images/banner.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {

  return (
    <div className="w-full text-center h-full py-44 m-auto bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `linear-gradient(to bottom, rgba(254, 217, 237, 0.52), rgba(231, 188, 222, 0.63)), url(${banner})` }}>
      <div className='md:mx-0 mx-2'>
        <h1 className='md:text-7xl text-4xl text-red-600 font-bold'>Hiring Just Got Easy Now</h1>
        <p className='md:text-xl font-bold text-gray-800 my-2 text-lg'>Join us and Search Thousands of Jobs</p>
      </div>
      <div className='md:mx-48 mx-7 p-10 mt-20' style={{ background: 'rgba(255,255,255,0.6)' }}>

        <form action="" className='flex md:flex-row flex-col md:justify-between justify-center items-center gap-5 '>

          <input type="search" name="" placeholder='Enter Keyword' className='py-3 px-5 outline-none w-full rounded italic' />
          <select name="Job Type" className='py-3 px-5 outline-none rounded w-full italic'>
            <option value="" selected disabled hidden>Job Type</option>
            <option value="Banking">Banking</option>
            <option value="IT">IT</option>
            <option value="NGO">NGO</option>
            <option value="Telecommunication">Telecommunication</option>
          </select>
          <select name="city" className='py-3 px-5 outline-none rounded w-full italic'>
            <option value="" selected disabled hidden>City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Cumilla">Cumilla</option>
            <option value="Sylet">Sylet</option>
            <option value="Rajshahi">Rajshahi</option>
          </select>
          <Link to="/search">
            <input type="submit" value="Search Job" className='py-3 px-5 border-2 rounded w-full border-purple-950 bg-purple-900 text-white hover:text-purple-950 hover:bg-transparent cursor-pointer font-bold' />
          </Link>
        </form>
      </div>

    </div>
  )
}

export default Banner

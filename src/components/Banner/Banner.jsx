import React from 'react'
import banner from '../../assets/images/banner.jpg'

const Banner = () => {

  return (
    <div className="w-full text-center h-full py-32 m-auto  bg-no-repeat bg-cover bg-center md:opacity-70" style={{ backgroundImage: `url(${banner})` }}>
      <div className=' my-5'>
        <h1 className='md:text-7xl text-4xl text-red-600 font-bold'>Hiring Just Got Easy Now</h1>
        <p className='md:text-xl font-bold text-gray-800 my-2 text-lg'>Join us and Search Thousands of Jobs.</p>
      </div>
      <div className='md:mx-48 mx-10 p-10 my-20' style={{background : 'rgba(255,255,255,0.6)'}}>

        <form action="" className='flex md:flex-row flex-col md:justify-between justify-center items-center gap-5 '>

          <input type="search" name="" placeholder='Enter Keyword' className='py-3 px-5 border-none w-full rounded italic' />
          <select name="Job Type" placeholder='Job Type' className='py-3 px-5 border-none rounded w-full italic'>
            <option value="" disabled>Job Type</option>
            <option value="Banking">Banking</option>
            <option value="IT">IT</option>
            <option value="NGO">NGO</option>
            <option value="Telecommunication">Telecommunication</option>
          </select>
          <select name="city" placeholder='City' className='py-3 px-5 border-none rounded w-full italic'>
            <option value="" disabled>City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Cumilla">Cumilla</option>
            <option value="Sylet">Sylet</option>
            <option value="Rajshahi">Rajshahi</option>
          </select>
          <input type="submit" value="Search Job" className='py-3 px-5 border-2 rounded w-full border-purple-950 bg-purple-900 text-white hover:text-purple-950 hover:bg-transparent cursor-pointer font-bold' />
        </form>
      </div>

    </div>
  )
}

export default Banner

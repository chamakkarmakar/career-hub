import React from 'react'

const Category = ({ category }) => {
  return (
    <div className='md:w-52 w-40 md:h-52 h-40 border-b-4 md:p-5 p-2 border-red-500 text-center shadow-2xl bg-zinc-200 hover:bg-red-500 hover:text-white duration-500 delay-75'>
      <img src={category.logo} alt={category.category_name} className='md:w-24 w-16 md:h-24 h-16 mx-auto' />
      <div className='my-3'>
      <h3 className='md:text-lg text-base font-bold'>{category.category_name}</h3>
      <p className='md:text-base text-sm'>{category.availability}</p>
      </div>
    </div>
  )
}

export default Category;

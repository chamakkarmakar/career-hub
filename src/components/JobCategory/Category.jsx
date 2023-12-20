import React from 'react'

const Category = ({ category }) => {
  return (
    <div className='w-52 h-52 border-b-4 p-5 border-red-500 text-center shadow-2xl bg-zinc-200 hover:bg-red-500 hover:text-white duration-500 delay-75'>
      <img src={category.logo} alt={category.category_name} className='w-2h-24 h-24 mx-auto' />
      <div className='my-3'>
      <h3 className='text-lg font-bold'>{category.category_name}</h3>
      <p>{category.availability}</p>
      </div>
    </div>
  )
}

export default Category;

import React from 'react'

export default function Category() {
  return (
    <div>
      <h2 className='font-bold'>Category</h2>
      <div className='flex gap-1 mt-1 flex-col'>
        <label htmlFor="" className=' '>
          <input type="radio" className='m-2 '/>
          <span>All</span>
        </label>
        <label htmlFor="">
          <input type="radio"className='m-2' />
          <span>Sneakers</span>
        </label>
        <label htmlFor="">
          <input type="radio" className='m-2' />
          <span>Flats</span>
        </label>
        <label htmlFor="">
          <input type="radio" className='m-2'/>
          <span>Sandels</span>
        </label>
        <label htmlFor="">
          <input type="radio"className='m-2' />
          <span>Hells</span>
        </label>
      </div>
    </div>
  )
}

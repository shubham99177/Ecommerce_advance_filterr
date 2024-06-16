import React from 'react'

function Colour() {
  return (
    <div>
       <div>
            <h2 className='font-bold'>Colors</h2>
            <div className='flex gap-1 mt-1 flex-col'>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>All</span>
                </label>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>Black</span>
                </label>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>blue</span>
                </label>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>Red</span>
                </label>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>Grenn</span>
                </label>
            </div>
        </div>
    </div>
  )
}

export default Colour
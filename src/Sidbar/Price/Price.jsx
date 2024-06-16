import React from 'react'

function Price() {
    return (
        <div>
            <h2 className='font-bold' >Price</h2>
            <div className='flex gap-1 mt-1 flex-col'>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>All</span>
                </label>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>$0-$50</span>
                </label>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>$50-$100</span>
                </label>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>$100-$150</span>
                </label>
                <label htmlFor="" className=' '>
                    <input type="radio" className='m-2 ' />
                    <span>$150-$200</span>
                </label>
            </div>
        </div>
    )
}

export default Price
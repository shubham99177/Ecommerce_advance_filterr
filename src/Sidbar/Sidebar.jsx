import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Color from './Colour/Colour'

function Sidebar() {
    return (
        <>   
        <div className='flex mt-10 justify-center items-center flex-col gap-4  w-[15%] fixed'>
        <div>
            🛒
        </div >
            <Category />
            <Price/>
            <Color/>
            
        </div>
        
        </>

    )
}

export default Sidebar
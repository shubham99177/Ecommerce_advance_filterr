
import Nav from './Navigation/Nav'
import Product from './Product/Product'
import Recomended from './Reccomended/Recomended'
import Sidbar from './Sidbar/Sidebar'

function App() {

  return (
    <>
      <div className=''>
        <div>
          <Nav />
        </div>

        <div className='flex w-screen gap-x-16'>
          <Sidbar />
          <div className='mt-56'>
            <Recomended className='' />

            <Product className='' />
          </div>

        </div>
      </div>


    </>
  )
}

export default App

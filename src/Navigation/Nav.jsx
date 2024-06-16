import { FiHeart } from "react-icons/fi"
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
function Nav() {
  return (
    <>
      <div className="my-4 fixed flex w-screen justify-around">
        <div className="flex px-2 shadow-xl border-2 w-1/3 rounded-md border-gray-100  ">
          <BiSearchAlt className="mt-2 "/>
          <input className=" focus:outline-none py-1 px-2" type="text" name="text" id="" placeholder="Search..." />
        </div >
        <div className="flex gap-6 " >
          <a href="#"> <FiHeart className="mt-2" /></a>
          <a href="#"><LuShoppingCart className="mt-2"  /></a>
          <a href="#"><FaRegUserCircle className="mt-2" /></a>
        </div>



      </div>
    </>
  )
}

export default Nav
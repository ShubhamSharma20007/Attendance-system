import React from 'react'
import { Link } from 'react-router-dom'
const Itemcard = ({item}) => {

  return (
    <>
        <div className="md:w-60 w-[48%] h-68  overflow-hidden rounded-md  mb-2">
        <Link to={"/products"}>
            <img src={item.img} className='w-full h-full object-cover rounded-md hidden sm:block' alt="" />
            <img src={item.mobImg} className='w-full h-full object-cover rounded-md block sm:hidden' alt="" />
            </Link>
        </div>
       
    </>
  )
}

export default Itemcard
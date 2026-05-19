import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'
// these props are basically sent from the different files like BestSeller which also provides the props required.
const ProductItem = ({id,image,name,price}) => {
    {/**getting the value from shopcontext */}
    const {currency} = useContext(ShopContext);
    {/**whenever user clicks it will direct the user to that pages for the further process */}
  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt=3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem

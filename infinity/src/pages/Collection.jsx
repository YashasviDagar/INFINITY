import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem';

const Collection = () => {
  {/*using context api we get all the datas of product */}
   const {products} = useContext(ShopContext);
   const [showFilter,setShowFilter] = useState(false);
   const [filterProducts,setFilterPoducts] = useState([]);
   const [category,setCategory] = useState([]);
   const [subCategory,setSubCategory] = useState([]);
   
  //  this is the spread operator (...) --> which means it will add all the remaining products in the category
  //if(category.includes(e.target.value))---First, the code checks: "Is the category I just clicked (e.g., 'Men') already in my selection list?"
  // e.target.value: This is the value of the checkbox you just clicked (like "Men", "Women", or "Kids").
  //setCategory(prev => prev.filter(item => item !== e.target.value)) If the category was already in the list, it means the user just unchecked the box.
  // .filter(): This creates a new list that includes every item except the one you just clicked. Result: "Men" is removed from your active filters.
  //setCategory(prev => [...prev, e.target.value]) If the category was not in the list, it means the user just checked the box.
  // ...prev: This is the Spread Operator. It takes all the existing categories already in your list.
  // e.target.value: This adds the new category to the end of that list.Result: "Men" is added to your active filters.
   const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item!==e.target.value))
   }else{
    setCategory(prev => [...prev,e.target.value])
  }}

  
  //here the filter() goes through every single product in your productsCopy array one by one. If a product passes the "test" inside the parentheses, it stays in the new list. If it fails, it is removed.
  // item => This is an arrow function where item represents the individual product currently being checked.
  //category is the state arr which holds the checked categories by user..item.category is the specific product being checked
  //.includes() This checks: "Is the category of this specific item present in the list of categories the user selected?"
  const applyFilter =() => {

    let  productsCopy = products.slice()

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    setFilterPoducts(productsCopy)
  }

   

   useEffect(()=>{
      applyFilter()
   },[category,subCategory])

   

   const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item!==e.target.value))
   }else{
    // this is the spread operator ... --> which means it will add all the remaining products in the category
    setSubCategory(prev => [...prev,e.target.value])
  }}


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter options */}

      <div className='min-w-60'>

        {/* here the onlick and sm:hidden and show filter and rotate 90 are used for when it is false then in the mobile view we will get the icon and when clicked it will rotate by 90 and dropdown filter will occur */}

        <p onClick={() => setShowFilter(!showFilter)} 
   className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
   <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}  src={assets.dropdown_icon} alt="" /></p>

      {/* Catergory filter */}

      <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>TYPE</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Men'} onChange={toggleCategory} />Men
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Women'} onChange={toggleCategory} />Women
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Kids'} onChange={toggleCategory} />Kids
          </p>
        </div>
      </div>

      {/* Sub category filter */}

      <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
        <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
        <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Topwear'} onChange={toggleSubCategory} />Topwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
          </p>
          <p className='flex gap-2'>
            <input className='w-3' type="checkbox" name="" id="" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
          </p>
        </div>
      </div>
      </div>

      {/* Right side of the page */}

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relavant">Sort by: Relavant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Mapping Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {

            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />
            ))

          }

        </div>

      </div>
  
    </div>
  )
}

export default Collection

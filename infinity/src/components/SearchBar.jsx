import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation, useSearchParams } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
    const [visible,setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
      //location obj contains the current url and whenever we click and URL changes the obj changes
      // It looks at location.pathname (e.g., /home or /collection/mens-wear).
      // includes('collection'): If the word "collection" is anywhere in the URL path, it triggers setVisible(true).
      // The Reset: If the user navigates away to a page like "About" or "Contact," it triggers setVisible(false), hiding the component.
        if(location.pathname.includes('collection')){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>

      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
        <img className='w-4' src={assets.search_icon} alt="" />
      </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null;
}

export default SearchBar

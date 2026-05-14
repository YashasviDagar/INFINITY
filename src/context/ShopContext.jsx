import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets"
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();
// creatContext is a built in funciton this is used outside of your component to create the "Context Object." It’s like building the phone line itself.
// Where: Usually at the top of your file or in a dedicated context file.
// What it returns: An object that includes the (.Provider) component.

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const navigate = useNavigate();

    const addToCart = async (itemId,size) => {

        if(!size){
            toast.error('Select Product Size');
            return;
        }

        // here structuredClone makes a copy of cartItems for us to use
        let cartData = structuredClone(cartItems);

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] +=1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        // not cart items cuz it prev cartData is the new item list that we have to send
        setCartItems(cartData);

    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]){
                        totalCount+=cartItems[items][item];
                    }
                }catch (error){
                        
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemId,size,quantity) => {
        let cartData = structuredClone(cartItems)

        cartData[itemId][size] = quantity;

        setCartItems(cartData);
    }

    const getCartAmount =  () => {
        let totalAmount = 0
        for(const items in cartItems){
            let itemInfo = products.find((product)=> product._id === items);
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                }catch (error){

                }
            }
        }
        return totalAmount;
    }

    useEffect(()=>{
        console.log(cartItems);
        
    },[cartItems])

    const value = {
        products , currency , delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,
        getCartCount,updateQuantity,
        getCartAmount,navigate
    }
    // here these are all the things in my self made API which can be transfered amoung the files to use it accordingly.

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
    // The Provider is a special built-in React component. Its only job is to take the value prop (the data you want to share) and "broadcast" it to every child component tucked inside {props.children}.
}

export default ShopContextProvider;
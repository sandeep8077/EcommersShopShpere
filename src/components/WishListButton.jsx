import { useDispatch, useSelector } from "react-redux"
import { addAsyncWishlist,removeAsyncWishListApi,addOptmisticWishList,removeOptimisticWishList  } from "../features/wishList/wishListSlice"

function WishListButton({product}){
    
   const wishListedItems = useSelector((state)=>state.wishlist.items)
    const isWishListed = wishListedItems.some((item)=>item.id == product.id)
    const dispatch = useDispatch()
    

   const  handleToggle = ()=>{
         if(isWishListed){
            dispatch(removeOptimisticWishList(product.id));
            dispatch(removeAsyncWishListApi(product));
            }
        else{
            dispatch(addOptmisticWishList(product));
            dispatch(addAsyncWishlist(product));
        }
       
    }


    return(<>
       <button
              onClick={handleToggle}
              className="text-red-500 text-xl"
                 >
                 {isWishListed ? "❤️" : "🤍"}
               </button>
    </>)
}

export default WishListButton;
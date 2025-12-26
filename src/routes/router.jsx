import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoutes from "./protectedRoutes";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";
import Checkout from "../pages/Checkout";
import Admin from "../pages/Admin";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import WishList from "../pages/WishList";

export const router = createBrowserRouter([
    {path:'/', 
    
     element:<RootLayout/>,
     errorElement:<ErrorPage/>,
    children:[
        {index:true,element:<Home/>},
        {path:'login',element:<Login/>},
        {path:'products', element:<Products/>},
        {path:'products/:id',element:<ProductDetails/>},
        {path:'cart',
            element:(<ProtectedRoutes>
                      <Cart/>
                    </ProtectedRoutes>)},
        {path:"orders",
            element:(<ProtectedRoutes>
                       <Orders/>
                     </ProtectedRoutes>)
        },
        {path:"checkout",
            element:(<ProtectedRoutes>
                       <Checkout/>
                     </ProtectedRoutes>)
        },
        {path:"admin",
            element:(<ProtectedRoutes role="admin">
                       <Admin/>
                     </ProtectedRoutes>)
        },
       {path:"wishlist",element:(<ProtectedRoutes>
              <WishList/>
       </ProtectedRoutes>)}
    ]
    }
])
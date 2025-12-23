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

export const router = createBrowserRouter([
    {path:'/', 
    
     element:<RootLayout/>,
     errorElement:<ErrorPage/>,
    children:[
        {index:true,element:<Home/>},
        {path:'login',element:<Login/>},
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
        }
    ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../pages/Main/Main";
import Chefs from "../pages/Main/Chefs/Chefs";
import ChefRecipes from "../pages/Main/ChefRecipes/ChefRecipes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../providers/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            // {
            //     path: '/chef',
            //     element: <Chefs />
            // },
            {
                path: '/chef-recipes/:id',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chef-recipes/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;
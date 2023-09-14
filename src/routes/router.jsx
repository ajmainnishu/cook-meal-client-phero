import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../pages/Main/Main";
import Chefs from "../pages/Main/Chefs/Chefs";
import ChefRecipes from "../pages/Main/ChefRecipes/ChefRecipes";


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
                element: <ChefRecipes />,
                loader: ({params}) => fetch(`http://localhost:5000/chef-recipes/${params.id}`)
            }
        ]
    }
])

export default router;
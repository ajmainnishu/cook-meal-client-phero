import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../pages/Main/Main";
import Chefs from "../pages/Main/Chefs/Chefs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/chef',
                element: <Chefs />
            }
        ]
    }
])

export default router;
import {createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout";



const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        
    },
    {
        path:'/auth',
        element:<h2>This is auth layout</h2>
    },
    {
        path:'*',
        element:<h2>This is error page</h2>
    }
]);

export default router;
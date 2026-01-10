import {createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout";
import WhatWeDo from "../Pages/WhatWeDo/WhatWeDo";



const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<WhatWeDo></WhatWeDo>,
                loader: ()=> fetch('/whatWeDo.json')
            }
        ]
        
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
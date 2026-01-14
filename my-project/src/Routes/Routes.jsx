import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import WhatWeDo from "../Pages/WhatWeDo/WhatWeDo";
import OurCauses from "../Pages/OurCauses/OurCauses";
import CausesDetails from "../Pages/OurCauses/CausesDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <WhatWeDo></WhatWeDo>,
                loader: () => fetch('/whatWeDo.json')
            }

        ]

    },
    {
        path: '/our-causes',
        element: <OurCauses></OurCauses>,
        loader: () => fetch('/OurCauses.json')
    },
    {
        path:'/causes-details',
        element:<CausesDetails></CausesDetails>,
        loader: () => fetch('/OurCauses.json')
    },
    {
        path: '/auth',
        element: <h2>This is auth layout</h2>
    },
    {
        path: '*',
        element: <h2>This is error page</h2>
    }
]);

export default router;
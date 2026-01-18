import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import WhatWeDo from "../Pages/WhatWeDo/WhatWeDo";
import OurCauses from "../Pages/OurCauses/OurCauses";
import CausesDetails from "../Pages/OurCauses/CausesDetails";
import Event from "../Pages/Events/Event";
import EventDetails from "../Pages/Events/EventDetails";
import DonationDetails from "../Pages/Donation/DonationDetails";




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
        path: '/causes-details/:id',
        element: <CausesDetails></CausesDetails>,
        loader: () => fetch('/OurCauses.json'),
       
    },
    {
        path:'/events',
        element:<Event></Event>,
        loader: ()=> fetch ('/Events.json')
    },
    {
        path:'/event-details/:id',
        element:<EventDetails></EventDetails>,
        loader: ()=> fetch ('/Events.json')    
    },
    {
        path:'/donation-details',
        element:<DonationDetails></DonationDetails>
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
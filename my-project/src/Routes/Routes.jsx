import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import WhatWeDo from "../Pages/WhatWeDo/WhatWeDo";
import OurCauses from "../Pages/OurCauses/OurCauses";
import CausesDetails from "../Pages/OurCauses/CausesDetails";
import Event from "../Pages/Events/Event";
import EventDetails from "../Pages/Events/EventDetails";
import Donation from "../Pages/Donation/Donation";
import EventDetailsCard from "../Pages/Events/EventDetailsCard";
import LearnMore from "../Pages/Events/LearnMore";



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
        loader: ()=> fetch ('/Events.json'),
        children:[
            // {
            //     index:true,
            //     element:<EventDetailsCard></EventDetailsCard>
            // },
            {
                path:'/event-details/:id',
                element:<Donation></Donation>
            },
            {
                path:'/event-details/:id',
                element:<LearnMore></LearnMore>
            }
        ]
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
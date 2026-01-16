import { useEffect, useState } from "react";
import EventCard from "./EventCard";


const EventSection = () => {
    const [events, setEvents]=useState([]);

    const eventSlice=events.slice(1,4);

    useEffect(()=>{
        fetch('/Events.json')
        .then(res=>res.json())
        .then(data=>setEvents(data))
    },[])
    return (
        <div className="w-9/12 mx-auto mt-10 bg-white space-y-6 ">
            <p className='text-center text-[#21c8cb]'>Our Events</p>
            <h2 className='text-3xl text-center font-semibold'>Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {
                    eventSlice?.map(event=><EventCard key={event.id} event={event}></EventCard>)
                }
            </div>
        </div>
    );
};

export default EventSection;
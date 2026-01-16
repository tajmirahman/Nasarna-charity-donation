import { useEffect, useState } from "react";


const EventSection = () => {
    const [event, setEvent]=useState([]);

    useEffect(()=>{
        fetch('/Events.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            <p className='text-center'>Our Events</p>
            <h2 className='text-3xl text-center font-semibold'>Upcoming Events</h2>
            <div>

            </div>
        </div>
    );
};

export default EventSection;
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    // console.log(event);
    return (
        <div>
            <div className="card">
                <img className='w-full mx-auto' src={event.image} alt="" />
                <div className="card-body">
                    <h2 className='text-xl font-semibold'>{event.title}</h2>
                    <p>{event.details.slice(0, 79) + "..."}</p>
                    <Link to={`/event-details/${event.id}`} className='text-[#21c8cb] font-bold'>Learn more ...</Link>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
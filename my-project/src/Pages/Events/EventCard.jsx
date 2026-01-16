import React from 'react';

const EventCard = ({ event }) => {
    // console.log(event);
    return (
        <div>
            <div className="card">
                <img src={event.image} alt="" />
                <div className="card-body">
                    <h2 className='text-xl font-semibold'>{event.title}</h2>
                    <p>{event.details.slice(0, 79) + "..."}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
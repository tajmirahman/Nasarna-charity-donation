import React from 'react';

const EventCard = ({event}) => {
    // console.log(event);
    return (
        <div>
            <div className="card">
                <img src={event.image} alt="" />
                <div className="card-body">
                    <h2>{event.title}</h2>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
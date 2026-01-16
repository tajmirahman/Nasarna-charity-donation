import React from 'react';

const MapLocation = ({location}) => {
    return (
        <div className="w-full h-[350px] rounded-lg overflow-hidden border">
            <iframe
                title="event-map"
                src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapLocation;
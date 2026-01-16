import React from 'react';
import { Link } from 'react-router-dom';

const LeftSide = ({event}) => {
    return (
        <div>
            <img src={event.image} alt="" />

            <div>
                <Link to={`/learn-more/${event.id}`} className='btn'>Learn More</Link>
                <Link to={'/donation'} className='btn'>Donation</Link>
            </div>

        </div>
    );
};

export default LeftSide;
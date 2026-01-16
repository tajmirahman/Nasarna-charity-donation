
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const LeftSide = ({event}) => {
    const [learnMore, setLearnMore]=useState(null);
    const [donation,setDonation]=useState(null);

    const handleLearn=()=>{
        setLearnMore('yes learn handle')
    }

    const handleDonation=()=>{
        setDonation('yes donetion click')

    }

    return (
        <div>
            <img src={event.image} alt="" />

            <div>
                <Link onClick={handleLearn}  className='btn'>Learn More</Link>
                <Link onClick={handleDonation} className='btn'>Donation</Link>
            </div>

            <div>
                {
                    <h2>{learnMore}</h2>
                }
            </div>
            <div>
                <h2>{donation}</h2>
            </div>

        </div>
    );
};

export default LeftSide;
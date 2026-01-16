
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LearnMore from './LearnMore';
import Donation from '../Donation/Donation';
import Contact from './Contact';

const LeftSide = ({ event }) => {
    const [active, setActive] = useState("");

    const handleLearn = () => {
        setActive('learn')
    }

    const handleDonation = () => {
        setActive('donation')

    }

    const handleContact = () => {
        setActive('contact');
    }

    return (
        <div>
            <div>
                <img src={event.image} alt="" />
                <p>{event.details}</p>
            </div>

            <div>
                <Link onClick={handleLearn} className='btn'>Learn More</Link>
                <Link onClick={handleDonation} className='btn'>Map Location</Link>
                <Link onClick={handleContact} className='btn'>Contact Us</Link>
            </div>

            <div className=''>
                {
                    active === 'learn' && (<LearnMore event={event}></LearnMore>)

                }
            </div>
            <div>
                {active === 'donation' && (
                    <Donation></Donation>
                )}
            </div>

            <div>
                {active === 'contact' && (
                    <Contact></Contact>
                )}
            </div>

        </div>
    );
};

export default LeftSide;

import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import LearnMore from './LearnMore';
import Donation from '../Donation/Donation';
import Contact from './Contact';
import MapLocation from './MapLocation';

const LeftSide = ({ event }) => {
    const [active, setActive] = useState("learn");

    // for navlink active buttons 
    // const activeClass = ({ isActive }) =>
    //     isActive
    //         ? "btn bg-primary text-white"
    //         : "btn";

    // for other buttons active except navlink
    const btnClass = (name) =>
        active === name ? "btn bg-[#21c8cb] text-white" : "btn";


    const handleLearn = () => {
        setActive('learn');
    }

    const handleMap = () => {
        setActive('map');

    }

    const handleContact = () => {
        setActive('contact');
    }

    return (
        <div>
            <div className='space-y-3 '>
                <img src={event.image} alt="" />
                <p>{event.details}</p>
            </div>

            <div className='flex justify-evenly my-5'>
                <NavLink onClick={handleLearn} className={btnClass('learn')}>Learn More</NavLink>
                <NavLink onClick={handleMap} className={btnClass('map')}>Map Location</NavLink>
                <NavLink onClick={handleContact} className={btnClass('contact')}>Contact Us</NavLink>
            </div>


            <div className=''>
                {
                    active === 'learn' && (<LearnMore event={event}></LearnMore>)

                }
            </div>
            <div>
                {active === 'map' && (
                    <MapLocation location={event.location}></MapLocation>
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
import React, { useEffect, useState } from 'react';
import { FaGooglePlusG } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Volunteer = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/Volunteer.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div>
            <p className='bg-[#21c8cb] text-center'>Meet Our Team</p>
            <h2 className='text-3xl text-center'>Our Expert Volunteer</h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {
                    data?.map(volunteer => (
                        <div>
                            <figure>
                                <img src={volunteer.image} alt="" />
                            </figure>
                            <div>
                                <h2 className='text-2xl font-semibold mt-2'>{volunteer.name}</h2>
                                <p className='text-xl mt-2'>{volunteer.desination}</p>
                                <div className='flex justify-center items-center gap-3'>
                                    <FaGooglePlusG />
                                    <FaFacebookF />
                                    <FaTwitter />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Volunteer;
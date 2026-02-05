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
        <div className='w-10/12 mx-auto '>
            <p className='text-[#21c8cb] text-center mb-6'>Meet Our Team</p>
            <h2 className='text-3xl text-center mb-5'>Our Expert Volunteer</h2>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    data?.map(volunteer => (
                        <div className='relative'>
                            <figure >
                                <img src={volunteer.image} alt="" />
                            </figure>

                            <div className='absolute top-[200px] right-3 p-4 shadow-lg border-4 bg-white hover:bg-[#21c8cb] hover:text-white'>
                                <h2 className='text-2xl font-semibold mt-2 text-center'>{volunteer.name}</h2>
                                <p className='text-xl my-2 text-center'>{volunteer.desination}</p>
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

        
                <div className='flex justify-evenly items-center mt-20 bg-[#2cd08c] h-[200px]'>
                    <p className='md:text-3xl text-white'>Lets Chenge The World <br /> With Humanity</p>
                    <button className='btn'>Become a volunteer</button>
                </div>
           
        </div>
    );
};

export default Volunteer;
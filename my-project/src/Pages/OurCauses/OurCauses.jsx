import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../../Components/Header';

const OurCauses = () => {
    const data = useLoaderData();
    console.log(data)

    return (
        <div>
            <Header></Header>
            <nav
                className='flex justify-center items-center *:border h-[200px]'
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/DHdjhyKp/img-3-6d6b3c93.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className='text-white text-center '>
                    <h1 className='text-4xl font-bold mb-3'>Our Causes</h1>
                    <Link to={'/'}><span>Home</span></Link> / <span>causes</span>
                </div>
            </nav>
        </div>
    );
};

export default OurCauses;
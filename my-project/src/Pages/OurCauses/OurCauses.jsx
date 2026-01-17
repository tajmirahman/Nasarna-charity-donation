import React from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import Header from '../../Components/Header';
import CausesCard from './CausesCard';
import Footer from '../../Components/Footer';

const OurCauses = () => {
    const data = useLoaderData();
    const location = useLocation();

    console.log(data)

    return (
        <div>
            <Header></Header>
            <nav
                className='flex justify-center items-center h-[200px]'
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co.com/DHdjhyKp/img-3-6d6b3c93.png)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className='text-white text-center '>
                    <h1 className='text-4xl font-bold mb-3'>Our Causes</h1>
                    <Link to={'/'}><span className='font-semibold text-xl'>Home</span></Link> {'>'}
                    <span className='font-semibold text-xl'
                        style={{ color: location.pathname === '/our-causes' ? '#08cc7f' : 'white' }}
                    >causes</span>
                </div>
            </nav>

            <div className='w-10/12 mx-auto'>
                <h2 className='text-2xl md:text-4xl text-center p-2 my-10'>Popular Causes What You Should Know
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mb-10'>
                    {
                        data.map(causes => <CausesCard causes={causes}></CausesCard>)
                    }
                </div>
            </div>

            <Footer></Footer>

            
        </div>
    );
};

export default OurCauses;
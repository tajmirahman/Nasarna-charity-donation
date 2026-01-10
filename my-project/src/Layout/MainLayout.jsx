import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navber';
import { Outlet } from 'react-router-dom';


const MainLayout = () => {
    return (
        <div className='bg-[#f5f9fd] '>
            <Header></Header>
            <Navbar></Navbar>

            <Outlet></Outlet>

            <section>
              
            </section>

        </div>
    );
};

export default MainLayout;
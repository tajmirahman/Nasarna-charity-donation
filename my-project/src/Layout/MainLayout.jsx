import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navber';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayout;
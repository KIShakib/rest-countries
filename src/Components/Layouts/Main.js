import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const Main = () => {
    return (
        <div>
            <Header />
            <div className='lg:w-[90%] mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;
import React, { Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';
import PageLoader from '../components/PageLoader/PageLoader';

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Suspense fallback={<PageLoader />} >
                <Outlet />
            </Suspense>

            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;
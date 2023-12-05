import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/header';
import Footer from '../Footer/footer';


const RootLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;
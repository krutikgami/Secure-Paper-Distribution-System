import React from 'react'
import Header from './Pages/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Pages/Footer';

 function Layout() {

    return (
        <>
           <Header />
           <Outlet />
           <Footer /> 
        </>
    )
}

export default Layout;

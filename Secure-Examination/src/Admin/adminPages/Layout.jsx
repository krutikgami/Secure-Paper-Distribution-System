import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import Profile from './Profile';
import Requests from './Requests';

function Layout (){
  return (
    <>
    <Sidebar />
    <Outlet />
    <Profile />
    {/* <Requests /> */}

    </>
  );
};

export default Layout;

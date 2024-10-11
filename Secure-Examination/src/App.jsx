import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx';
import Upload from './Pages/Upload.jsx';
import View from './Pages/View.jsx';
import AdminLogin from './Admin/adminPages/AdminLogin.jsx';
import Layout1 from './Admin/adminPages/Layout.jsx';
import Dashboard from "./Admin/adminPages/Dashboard.jsx";
import Requests from "./Admin/adminPages/Requests.jsx";
import Tracking from "./Admin/adminPages/Tracking.jsx";
import AdminUpload from "./Admin/adminPages/AdminUpload.jsx";
import Profile from "./Admin/adminPages/Profile.jsx";
import ProtectedRoute1 from './Admin/context/ProtectedRoute.jsx';
import Home from './Pages/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='sign-in' element={<Login />} />
          <Route path='admin-login' element={<AdminLogin />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='upload' element={<ProtectedRoute1 allowedRoles={['examiner']}><Upload /></ProtectedRoute1>} />
          <Route path='view' element={<ProtectedRoute1 allowedRoles={['invigilator']}><View /></ProtectedRoute1>} />
        </Route>

        {/* Protect the admin routes */}
        <Route path="layout" element={<ProtectedRoute1 allowedRoles={['admin']}><Layout1 /></ProtectedRoute1>}>
          <Route path="dashboard" element={<ProtectedRoute1 allowedRoles={['admin']}><Dashboard /></ProtectedRoute1>} />
          <Route path="requests" element={<ProtectedRoute1 allowedRoles={['admin']}><Requests /></ProtectedRoute1>} />
          <Route path="track-record" element={<ProtectedRoute1 allowedRoles={['admin']}><Tracking /></ProtectedRoute1>} />
          <Route path="upload" element={<ProtectedRoute1 allowedRoles={['admin']}><AdminUpload /></ProtectedRoute1>} />
          <Route path="profile" element={<ProtectedRoute1 allowedRoles={['admin']}><Profile /></ProtectedRoute1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

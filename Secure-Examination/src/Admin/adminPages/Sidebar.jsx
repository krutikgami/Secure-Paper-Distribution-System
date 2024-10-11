import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-gray-800 p-4 flex flex-col justify-between">
      <div>
        <h1 className="text-lg font-bold text-white mb-16">Admin Dashboard</h1>
        <ul>
          <li className="mb-9">
            <Link to="/profile" className="text-white text-lg hover:text-gray-200">
              Profile
            </Link>
          </li>
          <li className="mb-9">
            <Link to="/upload" className="text-white text-lg hover:text-gray-200">
              Upload
            </Link>
          </li>
          <li className="mb-9">
            <Link to="/requests" className="text-white text-lg hover:text-gray-200">
              Requests
            </Link>
          </li>
          <li className="mb-9">
            <Link to="/track-record" className="text-white text-lg hover:text-gray-200">
              Track Record
            </Link>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <Link to="/logout" className="text-white text-lg hover:text-gray-200">
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

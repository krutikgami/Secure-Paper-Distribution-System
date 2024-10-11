import React from 'react';

function Profile() {
  return (
    <aside className="ml-[270px] bg-white shadow-md">
      <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
        <div className="w-full md:w-1/2 p-4 border rounded-md">
          <h2 className="text-xl font-bold">Edit Profile</h2>
          <div className="my-4">
            <label className="block text-sm font-medium">Avatar</label>
            <button className="mt-1 px-4 py-2 bg-blue-500 text-white rounded">Upload</button>
          </div>
          <div className="my-4">
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border rounded" placeholder="John Doe" />
          </div>
          <div className="my-4">
            <label className="block text-sm font-medium">E-mail</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border rounded" placeholder="user@example.com" />
          </div>
          <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Submit</button>
        </div>
        <div className="w-full md:w-1/2 p-4 border rounded-md">
          <h2 className="text-xl font-bold">Profile</h2>
          <div className="my-4">
            <div className="bg-gray-200 h-32 w-32 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-red-500">You are using an outdated API endpoint</span>
            </div>
            <label className="block text-sm font-medium">Name</label>
            <p className="mt-1">John Doe</p>
          </div>
          <div className="my-4">
            <label className="block text-sm font-medium">E-mail</label>
            <p className="mt-1">user@example.com</p>
          </div>
        </div>
      </div>
      <div className="mt-8 p-4 border rounded-md w-full">
        <h2 className="text-xl font-bold">Change Password</h2>
        <div className="my-4">
          <label className="block text-sm font-medium">Current password</label>
          <input type="password" className="mt-1 block w-full px-3 py-2 border rounded" placeholder="Current password" />
        </div>
        <div className="my-4">
          <label className="block text-sm font-medium">New password</label>
          <input type="password" className="mt-1 block w-full px-3 py-2 border rounded" placeholder="New password" />
        </div>
        <div className="my-4">
          <label className="block text-sm font-medium">Confirm password</label>
          <input type="password" className="mt-1 block w-full px-3 py-2 border rounded" placeholder="Confirm password" />
        </div>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Submit</button>
      </div>
    </aside>
   
  );
}

export default Profile;

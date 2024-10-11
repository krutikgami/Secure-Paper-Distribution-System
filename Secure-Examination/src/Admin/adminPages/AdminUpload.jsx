import React, { useState } from 'react';

const AdminUpload = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen p-4 ml-72 md:ml-0">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">
        <form>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Upload Paper
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminUpload;

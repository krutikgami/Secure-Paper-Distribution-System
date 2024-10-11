import React from 'react';

const Requests = () => {
  const clients = [
    { name: "Rebecca Bauch", company: "Daugherty-Daniel", city: "South Cory", progress: 80, created: "Oct 25, 2021" },
    { name: "Felicita Yundt", company: "Johns-Weissnat", city: "East Ariel", progress: 50, created: "Jan 8, 2021" },
    { name: "Mr. Larry Satterfield V", company: "Hyatt Ltd", city: "Windlerburgh", progress: 30, created: "Dec 18, 2021" },
    { name: "Mr. Broderick Kub", company: "Kshlerin, Bauch and Ernser", city: "New Kirstenport", progress: 60, created: "Sep 13, 2021" },
    { name: "Barry Weber", company: "Schulist, Mosciski and Heidenreich", city: "East Violettestad", progress: 40, created: "Jul 24, 2021" },
    { name: "Bert Kautzer MD", company: "Gerhold and Sons", city: "Mayeport", progress: 90, created: "Mar 30, 2021" },
    { name: "Lonzo Steuber", company: "Skiles Ltd", city: "Marilouville", progress: 70, created: "Feb 12, 2021" },
    { name: "Jonathon Hahn", company: "Flatley Ltd", city: "Billiemouth", progress: 50, created: "Dec 30, 2021" },
  ];

  return (
    <div className=" ml-[250px] p-4">
      <div className="bg-blue-500 text-white p-4 mb-4 flex justify-between items-center rounded">
        <h2 className="text-lg">Responsive table</h2>
        <button className="bg-white text-blue-500 py-1 px-2 rounded">Dismiss</button>
      </div>
      <table className="min-w-full bg-white border rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-4 border-b text-left">
              <input type="checkbox" />
            </th>
            <th className="p-4 border-b text-left">Name</th>
            <th className="p-4 border-b text-left">Company</th>
            <th className="p-4 border-b text-left">City</th>
            <th className="p-4 border-b text-left">Progress</th>
            <th className="p-4 border-b text-left">Created</th>
            <th className="p-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-4 border-b">
                <input type="checkbox" />
              </td>
              <td className="p-4 border-b">{client.name}</td>
              <td className="p-4 border-b">{client.company}</td>
              <td className="p-4 border-b">{client.city}</td>
              <td className="p-4 border-b">
                <div className="w-full bg-gray-200 rounded-full">
                  <div
                    className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{ width: `${client.progress}%` }}
                  >{client.progress}%</div>
                </div>
              </td>
              <td className="p-4 border-b">{client.created}</td>
              <td className="p-4 border-b">
                <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">View</button>
                <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Requests;


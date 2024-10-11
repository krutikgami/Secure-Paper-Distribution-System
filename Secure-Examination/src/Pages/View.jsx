import React, { useState, useEffect } from 'react';

const View = () => {
  const [passwords, setPasswords] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [pdfs, setPdfs] = useState([]);
  const [successpdf, setSuccesspdf] = useState([]);

  const handleview = async () => {
    try {
      const res = await fetch('/api/v1/users/fetchpdf', {
        method: 'POST',
      });
      if (res.ok) {
        const data = await res.json();
        setPdfs(data.data);
        const savedSuccesspdf = JSON.parse(localStorage.getItem('successpdf')) || [];
        setSuccesspdf(savedSuccesspdf);
      } else {
        console.error('Failed to fetch PDFs');
      }
    } catch (error) {
      console.error('Error fetching PDFs:', error);
    }
  };

  const handlePasswordChange = (e, pdfId) => {
    setPasswords({ ...passwords, [pdfId]: e.target.value });
  };

  const handlePasswordSubmit = (pdfId) => {
    const pdf = pdfs.find(pdf => pdf._id === pdfId);
    if (pdf && passwords[pdfId] === pdf.password) {
      const updatedSuccesspdf = [...successpdf, pdfId];
      setSuccesspdf(updatedSuccesspdf);
      setPasswords({ ...passwords, [pdfId]: '' });
      localStorage.setItem('successpdf', JSON.stringify(updatedSuccesspdf));
    } else {
      alert('Incorrect password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    handleview();
  }, []);

  return (
    <div className="flex flex-col min-w-screen min-h-screen bg-gray-100 p-4">
      <button onClick={handleview} className="mb-4 p-2 bg-blue-500 w-28 h-12 ml-auto text-white rounded">
        View All
      </button>
      <div className="mb-4 text-2xl md:text-3xl font-bold text-center">Track Pdf Details</div>
      {pdfs.length > 0 ? (
        pdfs.map((pdf) => (
          <div key={pdf._id} className="mb-8 flex flex-col md:flex-row md:items-start">
            <div className="text-base md:text-base lg:text-xl font-semibold md:w-1/2">
              <div className="md:text-xl">
                Title: <span className="text-base md:text-lg lg:text-xl">{pdf.title}</span>
              </div>
              {!successpdf.includes(pdf._id) && (
                <div className="relative flex items-center mt-4 space-x-3">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    value={passwords[pdf._id] || ''}
                    onChange={(e) => handlePasswordChange(e, pdf._id)}
                    className="p-2 border rounded"
                  />
                  <button onClick={togglePasswordVisibility} className="absolute lg:left-[195px] left-[176px] h-full p-2  bg-gray-200 rounded">
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                  <button
                    onClick={() => handlePasswordSubmit(pdf._id)}
                    className="p-2 bg-blue-500 text-white rounded"
                  >
                    Submit
                  </button>
                </div>
              )}
            </div>
            {successpdf.includes(pdf._id) && (
              <div className="mt-4 md:mt-0 lg:justify-items-start lg:mt-10 md:w-1/2">
                <iframe
                  src={pdf.pdfurl.url}
                  className="h-64 md:h-80 lg:h-72"
                  title="PDF Document"
                />
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="text-center text-lg md:text-xl lg:text-2xl">No PDFs available.</div>
      )}
    </div>
  );
};

export default View;

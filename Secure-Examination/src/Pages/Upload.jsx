import React, { useState, useEffect } from 'react';


const Upload = () => {
  const [formdata, setFormdata] = useState({});
  const [load, setLoad] = useState(false);
  const [errormessage, setErrormessage] = useState('');
  const [pdfs, setPdfs] = useState({ data: [] }); 
  const [emails, setEmails] = useState([]); 


  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormdata({ ...formdata, [id]: files[0] });
    } else {
      setFormdata({ ...formdata, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoad(true);
      setErrormessage(null);

      const formData = new FormData();
      for (const key in formdata) {
        formData.append(key, formdata[key]);
      }

      const res = await fetch('/api/v1/users/uploadpdf', {
        method: 'POST',
        body: formData,
      });

      setLoad(false);
      if (res.ok) {
        const data = await res.json();
        // console.log('Upload successful:', data.data.password);
      
        fetchPdfs();
        // Fetch the updated list of PDFs after a successful upload
        sendEmailNotification(data.data.title, data.data.password);
      } else {
        const errorData = await res.json();
        setErrormessage(errorData.message || 'Upload failed');
      }
    } catch (error) {
      setLoad(false);
      setErrormessage(error.message);
    }
  };
  const sendEmailNotification = async (title,password) => {
    try {
      const res = await fetch('/api/v1/users/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          emails,
          subject: 'Secure Examination password details',
           text: `Hello invigilator,\n\nThe title of the PDF: ${title} \nYour password for the file is: ${password}`
        })
      });

      if (res.ok) {
        console.log('Email sent successfully');
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  

  const fetchPdfs = async () => {
    try {
      const res = await fetch('/api/v1/users/fetchpdf', {
        method: 'POST',
      });
      if (res.ok) {
        const data = await res.json();
        setPdfs(data);
      } else {
        console.error('Failed to fetch PDFs');
      }
    } catch (error) {
      console.error('Error fetching PDFs:', error);
    }
  };


  const useremailfetch = async () => {
    try {
      const res = await fetch('/api/v1/users/useremailfetch', {
        method: 'POST',
      });
      if (res.ok) {
        const data = await res.json();
        const invigilatorEmails = data.data
          .filter(user => user.role === 'invigilator')
          .map(user => user.email);
          // console.log(invigilatorEmails);
        setEmails(invigilatorEmails);
       
      } else {
        console.error('Failed to fetch user emails');
      }
    } catch (error) {
      console.error('Error fetching user emails:', error);
    }
  };


 

  useEffect(() => {
    fetchPdfs();
    useremailfetch();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <div className="flex items-center justify-center md:w-1/4 lg:w-1/4 xl:w-1/3 p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="bg-white p-6 mt-10 md:mt-10 rounded shadow-md w-full max-w-lg">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="title"
              onChange={handleChange}
              placeholder="Title"
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <input
              type="file"
              id="pdfurl"
              onChange={handleChange}
              required
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
              {load ? 'Uploading...' : 'Upload Paper'}
            </button>
          </form>
          {errormessage && <div className="text-red-500 mt-4">{errormessage}</div>}
        </div>
      </div>
      <div className="flex-1 h-screen overflow-y-auto p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="mb-4 text-3xl font-bold text-center">Track Pdf Details</div>

        {pdfs.data.length > 0 ? (
          pdfs.data.map((pdf) => (
            <div key={pdf._id} className="mb-4 text-center">
              <div className="text-2xl font-semibold">
                Title: <span className="text-xl">{pdf.title}</span>
              </div>
              <div className="text-2xl font-semibold">
                File:
                <div className="mt-4 flex justify-center">
                  <iframe
                    src={pdf.pdfurl.url}
                    className="md:w-1/2 lg:w-3/4 xl:w-1/2"
                    height="300px"
                    title="PDF Document"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No PDFs available.</div>
        )}
      </div>
    </div>
  );
};

export default Upload;

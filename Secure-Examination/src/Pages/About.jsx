import React from 'react'

 function About() {
    return (
        <>
          <div className="py-16 bg-white h-screen">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://img.freepik.com/free-vector/education-concept-illustration_114360-7918.jpg?size=626&ext=jpg&ga=GA1.1.174500988.1689150132&semt=ais_user"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Secure Examination Paper Distribution.
                      </h2>
                      <p className="mt-6 text-gray-600">
                          <ul className='list-disc text-black'>
                            <li>Digital Delivery</li>

                           <li> Implement secure online portals with access controls.</li>
                           <li> Use one-time passwords and time-limited access for downloads.</li>
                          </ul>
                      </p>
                      <p className="mt-4 text-gray-600">
                      While traditional paper-based exams offer a familiar format, they can be vulnerable to leaks and security breaches.Secure websites can offer a viable alternative for distributing exam papers while maintaining integrity. 
                      </p>
                  </div>
              </div>
          </div>
      </div>   
        </>
    )
}
export default About;
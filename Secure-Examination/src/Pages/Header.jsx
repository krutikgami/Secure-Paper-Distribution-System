import React, { useState, useEffect } from "react";
import { Link, NavLink, Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { Avatar, Dropdown } from "flowbite-react";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "../redux/userSlice.js";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [role, setRole] = useState(localStorage.getItem('role') || '');
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole !== role) {
      setRole(storedRole || '');
    }
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = ()=>{
    dispatch(signoutSuccess())
    localStorage.setItem('successpdf','');
  }

  return (
    <>
      <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <RouterLink to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-12"
                alt="Logo"
              />
            </RouterLink>
            <div className="flex items-center lg:order-2">
              <div className="block lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 focus:outline-none"
                >
                  {isMobileMenuOpen ? (
                    <AiOutlineClose className="h-6 w-6" />
                  ) : (
                    <AiOutlineMenu className="h-6 w-6" />
                  )}
                </button>
              </div>
              {currentUser ? (
                <div className="hidden lg:block">
                  <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                      <Avatar
                        className="w-8 h-8"
                        alt="user"
                        img={`https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png`}
                        rounded
                      />
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">@{currentUser.data.user.username}</span>
                      <span className="block text-sm font-medium truncate">
                        {currentUser.data.user.email}
                      </span>
                    </Dropdown.Header>
                    <Link to="/dashboard?tab=profile">
                      <Dropdown.Item>Profile</Dropdown.Item>
                    </Link>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogout} >Logout</Dropdown.Item>
                  </Dropdown>
                </div>
              ) : (
                <RouterLink
                  to="/sign-in"
                  className="hidden lg:block text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                  Log in
                </RouterLink>
              )}
            </div>

            <div
              className="hidden lg:flex lg:w-auto lg:order-1 lg:space-x-8"
              id="navbar-menu"
            >
              <ul className="flex flex-col mt-4 space-x-16 font-medium lg:flex-row lg:mt-0 lg:items-center">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                {currentUser && currentUser.data.user.role === 'examiner' && (
                  <li>
                    <NavLink
                      to="/upload"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      Upload
                    </NavLink>
                  </li>
                )}
                {currentUser && currentUser.data.user.role === 'invigilator' && (
                  <li>
                    <NavLink
                      to="/view"
                      className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                          isActive ? "text-orange-700" : "text-gray-700"
                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                      }
                    >
                      View
                    </NavLink>
                  </li>
                )}
                <li>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div className="bg-white border-t border-gray-200 lg:hidden shadow-md fixed top-0 right-0 w-64 h-full z-[999] mt-[4.25rem]">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className="h-6 w-6" />
            ) : (
              <AiOutlineMenu className="h-6 w-6" />
            )}
          </button>
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-orange-700" : "text-gray-700"
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                }
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>
            </li>
            {currentUser && currentUser.data.user.role === 'examiner' && (
              <li>
                <NavLink
                  to="/upload"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  onClick={toggleMobileMenu}
                >
                  Upload
                </NavLink>
              </li>
            )}
            {currentUser && currentUser.data.user.role === 'invigilator' && (
              <li>
                <NavLink
                  to="/view"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  onClick={toggleMobileMenu}
                >
                  View
                </NavLink>
              </li>
            )}
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer"
                onClick={toggleMobileMenu}
              >
                Contact
              </ScrollLink>
            </li>
            {currentUser ? (
              <li>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                   <p className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 cursor-pointer">Profile</p>
                  }
                >
                  <Dropdown.Header>
                    <span className="block text-sm">@{currentUser.data.user.username}</span>
                    <span className="block text-sm font-medium truncate">
                      {currentUser.data.user.email}
                    </span>
                  </Dropdown.Header>
                  <Link to="/dashboard?tab=profile">
                    <Dropdown.Item  >Profile</Dropdown.Item>
                  </Link>
                  <Dropdown.Divider />
                  <Dropdown.Item  onClick={handleLogout}>Logout</Dropdown.Item>
                </Dropdown>
              </li>
            ) : (
              <li>
                <RouterLink
                  to="/sign-in"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  Log in
                </RouterLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;

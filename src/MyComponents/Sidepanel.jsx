import React, { useEffect } from "react";

const Sidepanel = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-10 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        id="sideBar"
        className={`fixed w-95 h-full bg-white shadow-lg z-20 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full h-14 bg-[#232f3e] text-white text-xl font-bold flex items-center pl-5">
          <i className="bi bi-person-circle"></i>
          <p className="ml-2">Hello, sign in</p>
        </div>

        <div
          id="sideBarContent"
          className="bg-white h-screen overflow-y-auto pb-20"
        >
          <div className="border-b border-gray-300 px-6 py-6">
            <h2 className="text-xl font-bold mb-6">
              Digital Content & Devices
            </h2>
            <ul className="space-y-4 cursor-pointer">
              <li>Prime Video</li>
              <li>Amazon Music</li>
              <li>Kindle E-readers & Books</li>
              <li>Amazon Appstore</li>
            </ul>
          </div>

          <div className="border-b border-gray-300 px-6 py-6">
            <h2 className="text-xl font-bold mb-6">Shop by Department</h2>
            <ul className="space-y-4 cursor-pointer">
              <li>Electronics</li>
              <li>Computers</li>
              <li>Smart Home</li>
              <li>Arts & Crafts</li>
              <li>
                <select>
                  <option>See All</option>
                </select>
              </li>
            </ul>
          </div>

          <div className="border-b border-gray-300 px-6 py-6">
            <h2 className="text-xl font-bold mb-6">Programs & Features</h2>
            <ul className="space-y-4 cursor-pointer">
              <li>Gift Cards</li>
              <li>Shop by Interest</li>
              <li>Amazon Live</li>
              <li>International Shopping</li>
              <li>
                <select>
                  <option>See All</option>
                </select>
              </li>
            </ul>
          </div>

          <div className="px-6 py-6">
            <h2 className="text-xl font-bold mb-6">Help & Settings</h2>
            <ul className="space-y-4 cursor-pointer">
              <li>Your Account</li>
              <li>
                <i className="bi bi-globe"></i> English
              </li>
              <li>
                <i className="bi bi-flag-fill"></i> United States
              </li>
              <li>Customer Service</li>
              <li>Sign in</li>
            </ul>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          id="closeSideBar"
          className="fixed top-4 left-95 z-30 cursor-pointer"
          onClick={toggleSidebar}
        >
          <i className="bi bi-x-lg  text-white text-2xl p-2 "></i>
        </div>
      )}
    </>
  );
};

export default Sidepanel;

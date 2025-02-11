import React from "react";

const Navbar = ({toggleSidebar}) => {
  return (
    <> 
   
      <div className="h-15 bg-[#131921] text-xs text-white flex items-center justify-center p-1 gap-1" id="navbar">
       
          <img src="/Amazon-React-tailwind/images/logo.png" id="logo" className="h-[100%] w-30 nav-ops" />
        
        <div id="nav-address box" className="flex gap-1 nav-ops w-25">
        <div className="flex">
        <i className="bi bi-geo-alt mt-3"></i>
          </div>
          <p className="">Deliver to<br/><span className="font-extrabold text-base" >India</span></p>
          
        </div>
        <div id="nav-search" className="flex w-[60%] text-gray-500 glow rounded-[1rem] h-12">
          <select className="w-15 bg-gray-300 rounded-l-[0.5rem]  text-center glow">
            <option>All</option>
            <option>Fashion</option>
            <option>Electronics</option>
          </select>
          <input className="bg-[#e6e6e6] w-full p-2 focus:outline-none focus:ring-0" placeholder="Search on Amazon" />
          <button id="search-icon" className="bg-[#f3a847] w-15 rounded-r-[0.5rem] items-center justify-center text-xl flex text-gray-700 glow">
          <i className="bi bi-search"></i>
          </button>
        </div>

        <div id="language box" className="nav-ops font-bold text-base">
        <i className="bi bi-flag-fill"></i>
          <select id="language" className="text-gray-400">
            <option>EN</option>
            <option>EN</option>
            <option>EN</option>
          </select>
        </div>

        <div id="account box" className="nav-ops w-30 ">
          <p id="hello">Hello, sign in <select className="font-bold">
            <option>Account & Lists</option>
          </select></p>
          
        </div>

        <div id="orders box" className="nav-ops w-20">
          <p className="returns">Returns <br/> <span className="font-bold">& Orders</span></p>
         
        </div>
        <div id="nav-cart box" className="text-base nav-ops w-20">
        <i className="bi bi-cart-fill"></i>Cart
        </div>
      </div>

      <div className="flex h-10 bg-[#232f3e] text-white text- items-center px-2" id="panel">
        <div className="nav-ops" id="sideBarButton" onClick={toggleSidebar}>
        <i className="bi bi-list"></i>All
        </div>
        <div className="flex items-center gap-3">
          <p className="nav-ops">Today's Deal</p>
          <p className="nav-ops">Customer Service</p>
          <p className="nav-ops">Registry</p>
          <p className="nav-ops">Gift-Card</p>
          <p className="nav-ops">Sell</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

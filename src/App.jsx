import React, { useState } from "react";
import Navbar from "./MyComponents/Navbar";
import Foot from "./MyComponents/foot";
import Hero from "./MyComponents/Hero";
import Sidepanel from "./MyComponents/Sidepanel";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
   
      <Sidepanel isOpen={isOpen} toggleSidebar={toggleSidebar} />
      
      <Navbar toggleSidebar={toggleSidebar} />
      <Hero />
      <Foot />
    </div>
  );
};

export default App;

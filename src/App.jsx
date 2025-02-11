import React, { useState } from "react";
import Navbar from "./MyComponents/Navbar";

import Hero from "./MyComponents/Hero";
import Sidepanel from "./MyComponents/Sidepanel";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <Sidepanel isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Hero />
    </div>
  );
};

export default App;

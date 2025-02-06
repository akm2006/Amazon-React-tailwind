import React, { useState } from "react";
import Navbar from "./MyComponents/Navbar";
import Foot from "./MyComponents/foot";
import Todos from "./MyComponents/todos";
import Sidepanel from "./MyComponents/Sidepanel";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
   
      <Sidepanel isOpen={isOpen} toggleSidebar={toggleSidebar} />
      
      <Navbar toggleSidebar={toggleSidebar} />
      
      <Todos />
      <Foot />
    </div>
  );
};

export default App;

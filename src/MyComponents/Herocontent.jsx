import React from "react";
import Deals from "./Deals";
import Carousel from "./Carousel";
import Foot from "./foot";

const Herocontent = () => {
  return (
    <div id="heroContent" className=" left-0 px-10 absolute top-[50%] w-screen">
      <div
        id="message"
        className="bg-white w-full flex justify-center items-center p-2.5"
      >
        <p>
          You are on amazon.com(clone). You can also shop on Amazon India for
          millions of products with fast local delivery.
          <a href="https://www.amazon.in/">Click here to go to amazon.in</a>
        </p>
      </div>
      <Deals />
      <Carousel />
      <Foot/>
    </div>
  );
};

export default Herocontent;

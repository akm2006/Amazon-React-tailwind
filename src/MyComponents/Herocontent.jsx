import React from "react";

const Herocontent = () => {
  return (
    <div
      id="heroContent"
      className=" left-0 px-10 absolute top-[50%] border w-screen"
    >
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
      <div
        id="heroProducts"
        className="flex flex-wrap my-5 justify-between gap-7 border"
      >
        <div className="productBox">
          <h1>New year,new supplies</h1>
          <img
            src="/Amazon-React-tailwind/images/product/product1.jpg"
            alt=""
          />
          <a>Shop office products</a>
        </div>
        <div className="productBox"></div>
        <div className="productBox"><h1>Get your game on</h1>
          <img
            src="/Amazon-React-tailwind/images/product/product2.jpg"
            alt=""
            className=""
          />
          <a>Shop gaming</a></div>
        <div className="productBox">
          <h1>Gaming accessories</h1>
          <div className="productGrid">
          <img
            src="/Amazon-React-tailwind/images/product/product3.jpg"
            alt=""
            className=""
          />
          
            <img
            src="/Amazon-React-tailwind/images/product/product4.jpg"
            alt=""
            className=""
          />  <img
          src="/Amazon-React-tailwind/images/product/product5.jpg"
          alt=""
          className=""
        />  <img
        src="/Amazon-React-tailwind/images/product/product6.jpg"
        alt=""
        className=""
      />
        </div>
        <a>See more</a>
        </div>
        <div className="productBox"></div>
        <div className="productBox"></div>
        <div className="productBox"></div>
        <div className="productBox"></div>
      </div>
    </div>
  );
};

export default Herocontent;

import React from "react";

const Herocontent = () => {
  return (
    <div
      id="heroContent"
      className=" left-0 px-10 absolute top-[50%] w-screen"
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
        className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] my-5 gap-[2rem] place-items-center"
      >
        <div className="productBox">
          <h1>New year,new supplies</h1>
          <img
            src="/Amazon-React-tailwind/images/product/product1.jpg"
            alt=""
          />
          <a>Shop office products</a>
        </div>
        <div className="productBox">
          <h1>Shop for your home essentials</h1>
          <div className="productGrid">
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product7.jpg"
                alt=""
              />
              <p>Cleaning Tools</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product8.jpg"
                alt=""
              />
              <p>Home Storage</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product9.jpg"
                alt=""
              />
              <p>Home Decor</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product10.jpg"
                alt=""
              />
              <p>Bedding</p>
            </div>
          </div>
          <a>Discover more in Home</a>
        </div>
        <div className="productBox">
          <h1>Get your game on</h1>
          <img
            src="/Amazon-React-tailwind/images/product/product2.jpg"
            alt=""
            className=""
          />
          <a>Shop gaming</a>
        </div>
        <div className="productBox">
          <h1>Gaming accessories</h1>
          <div className="productGrid">
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product3.jpg"
                alt=""
              />
              <p>Headsets</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product4.jpg"
                alt=""
              />
              <p>Keyboards</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product5.jpg"
                alt=""
              />
              <p>Mouse</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product6.jpg"
                alt=""
              />
              <p>Chairs</p>
            </div>
          </div>
          <a>See more</a>
        </div>
        <div className="productBox">
          <h1>Shop deals in Fashion</h1>
          <div className="productGrid">
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product11.jpg"
                alt=""
              />
              <p>Jeans under $50</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product12.jpg"
                alt=""
              />
              <p>Tops under $25</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product13.jpg"
                alt=""
              />
              <p>Dresses under $30</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product14.jpg"
                alt=""
              />
              <p>Shoes under $50</p>
            </div>
          </div>
          <a>See all deals</a>
        </div>
        <div className="productBox">
          <h1>New home arrivals under $50</h1>
          <div className="productGrid">
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product15.jpg"
                alt=""
              />
              <p>Kitchen & dining</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product16.jpg"
                alt=""
              />
              <p>Home improvement</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product17.jpg"
                alt=""
              />
              <p>Decor</p>
            </div>
            <div className="productItem">
              <img
                src="/Amazon-React-tailwind/images/product/product18.jpg"
                alt=""
              />
              <p>Bedding & bath</p>
            </div>
          </div>
          <a>Shop the latest from Home</a>
        </div>
        <div className="productBox">
          <h1>Shop Valentines's Day gifts</h1>
          <img
            src="/Amazon-React-tailwind/images/product/product19.jpg"
            alt=""
            className=""
          />
          <a>Shop now</a>
        </div>
        <div className="productBox">
          <h1>Up to 75% off | Headphones</h1>
          <img
            src="/Amazon-React-tailwind/images/product/product20.jpg"
            alt=""
            className=""
          />
          <a>Shop now</a>
        </div>
      </div>
    </div>
  );
};

export default Herocontent;

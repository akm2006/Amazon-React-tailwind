import React from "react";
import logo from "/src/assets/images/foot.png";

const Foot = () => {
  return (
    <div className=" absolute text-white left-0 ">
      <footer>
        <div
          className="w-screen h-12 flex items-center justify-center bg-[#37475a] cursor-pointer hover:bg-[#41546b] "
          onClick={() => (window.location.hash = "#")}
          role="button"
        >
          <a className=" !text-white">Back to top</a>
        </div>
        <div className="bg-[#232f3e] flex justify-center border-b-[1px] border-gray-600 py-10 gap-30 max-sm:hidden">
          <div className="info ">
            <h3>Get to Know Us</h3>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Science</li>
            </ul>
          </div>

          <div className="info">
            <h3>Make Money with Us</h3>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an amazon Hub</li>
              <li>
                {">"} See More Make Money
                <br />
                with Us
              </li>
            </ul>
          </div>
          <div className="info">
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>
          <div className="info">
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                Amazon and <br />
                COVID-19
              </li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>
                Shipping Rates &<br />
                Policies
              </li>
              <li>
                Returns &<br /> Replacements
              </li>
              <li>
                Manage Your <br />
                Content and Devices
              </li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="bg-[#232f3e] flex justify-center items-center p-10 gap-20">
          <img src={logo} className="h-8 w-24 max-sm:hidden" alt="logo" />
          <div className="region flex gap-2">
            <div>
              <i className="bi bi-globe"></i> English
            </div>
            <div>
              <i className="bi bi-currency-dollar"></i> USD-U.S. Dollar
            </div>
            <div>
              <i className="bi bi-flag-fill"></i> United States
            </div>
          </div>
        </div>

        <div className="bg-[#131a22] flex flex-col justify-center items-center text-xs gap-1 p-10">
          <div className="terms flex gap-4">
            <a>Conditions of Use</a>
            <a> Privacy Notice</a>
            <a>Consumer Health Data Privacy Disclosure</a>
            <a>Your Ads Privacy Choices </a>
          </div>
          <div className="">
            <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Foot;

import React from 'react'
const Product = Object.entries(
  import.meta.glob("/src/assets/images/product/*.jpg", { eager: true })
)
  .map(([path, img]) => ({
    path,
    src: img.default || img,
    fileName: path.match(/\/([^\/]+)\.jpg$/)[1]
  }))
  .sort((a, b) => {
    const numA = parseInt(a.fileName.replace(/\D/g, ""), 10);
    const numB = parseInt(b.fileName.replace(/\D/g, ""), 10);

    return numA - numB;
  })
  .map((item) => item.src);
const Deals = () => {
  return (
    <div>
      <div
        id="heroProducts"
        className="grid grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] my-5 gap-[2rem] place-items-center">
        <div className="productBox">
          <h1>New year,new supplies</h1>
          <img
            src={Product[0]}
            alt=""
          />
          <a>Shop office products</a>
        </div>
        <div className="productBox">
          <h1>Shop for your home essentials</h1>
          <div className="productGrid">
            <div className="productItem">
              <img
            src={Product[6]}
            alt=""
              />
              <p>Cleaning Tools</p>
            </div>
            <div className="productItem">
              <img
            src={Product[7]}
            alt=""
              />
              <p>Home Storage</p>
            </div>
            <div className="productItem">
              <img
            src={Product[8]}
            alt=""
              />
              <p>Home Decor</p>
            </div>
            <div className="productItem">
              <img
            src={Product[9]}
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
            src={Product[1]}
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
            src={Product[2]}
            alt=""
              />
              <p>Headsets</p>
            </div>
            <div className="productItem">
              <img
            src={Product[3]}
            alt=""
              />
              <p>Keyboards</p>
            </div>
            <div className="productItem">
              <img
            src={Product[4]}
            alt=""
              />
              <p>Mouse</p>
            </div>
            <div className="productItem">
              <img
            src={Product[5]}
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
            src={Product[10]}
            alt=""
              />
              <p>Jeans under $50</p>
            </div>
            <div className="productItem">
              <img
            src={Product[11]}
            alt=""
              />
              <p>Tops under $25</p>
            </div>
            <div className="productItem">
              <img
            src={Product[12]}
            alt=""
              />
              <p>Dresses under $30</p>
            </div>
            <div className="productItem">
              <img
            src={Product[13]}
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
            src={Product[14]}
            alt=""
              />
              <p>Kitchen & dining</p>
            </div>
            <div className="productItem">
              <img
            src={Product[15]}
            alt=""
              />
              <p>Home improvement</p>
            </div>
            <div className="productItem">
              <img
            src={Product[16]}
            alt=""
              />
              <p>Decor</p>
            </div>
            <div className="productItem">
              <img
            src={Product[17]}
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
            src={Product[18]}
            alt=""
            className=""
          />
          <a>Shop now</a>
        </div>
        <div className="productBox">
          <h1>Up to 75% off | Headphones</h1>
          <img
            src={Product[19]}
            alt=""
            className=""
          />
          <a>Shop now</a>
        </div>
      </div>
    </div>
  )
}

export default Deals

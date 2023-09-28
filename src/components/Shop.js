import { useState, useEffect } from "react";
import img1 from "../images/category.avif";
import img2 from "../images/category2.avif";
import img3 from "../images/category3.avif";
import img4 from "../images/category4.avif";
import img5 from "../images/category5.avif";
import img6 from "../images/category6.avif";
import img7 from "../images/category7.avif";
import img8 from "../images/category8.avif";
import img9 from "../images/category9.avif";
import img10 from "../images/category1.avif";
import Replacement from "./Replacement";
import UseScroll from "./UseScroll";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";

function Shop() {
  const isScrolled = UseScroll();
  const [products, setProducts] = useState([]);
  const [filteredProductCount, setFilteredProductCount] = useState(0);
  const getProduct = () => {
    fetch("http://159.65.21.42:9000/products")
      .then((resp) => resp.json())
      .then((data) => {
        const filteredData = data.filter((product) => {
          return product.category === "RIVERSIDE";
        });
        setProducts(filteredData);
        setFilteredProductCount(filteredData.length);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="home-container">
      {isScrolled ? (
        <Replacement />
      ) : (
        <div className="smooth-scroll-container">
          <TopBar />
          <Navigation />
        </div>
      )}

      <div className="shopBannerBg">
        <div className="shopBanner">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Men</Link>
            </li>
            <li>Shop</li>
          </ul>
          <h1>MEN'S CLOTHES: NEW ARRIVALS</h1>
          <span>
            Discover our new arrival clothing and accessories right here. From
            versatile t-shirts and polos to chino shorts and trousers,
            every&nbsp;event is covered this season. Finish the look with some
            casual trainers or smarten up with a pair of boots.&nbsp;
          </span>
        </div>
      </div>
      <div className="category">
        <h4>CATEGORY</h4>
        <div className="categoryImg">
          <div className="catImg">
            <img src={img1} alt="" />
            <h6>T-shirts &amp; Vests</h6>
          </div>
          <div className="catImg">
            <img src={img2} alt="" />
            <h6>Shirts</h6>
          </div>{" "}
          <div className="catImg">
            <img src={img3} alt="" />
            <h6>Trousers</h6>
          </div>{" "}
          <div className="catImg">
            <img src={img4} alt="" />
            <h6>Accessories</h6>
          </div>{" "}
          <div className="catImg">
            <img src={img5} alt="" />
            <h6>Jeans</h6>
          </div>{" "}
          <div className="catImg">
            <img src={img6} alt="" />
            <h6>Hoodies &amp; Sweatshirts</h6>
          </div>{" "}
          <div className="catImg">
            <img src={img7} alt="" />
            <h6>Suits</h6>
          </div>{" "}
          <div className="catImg">
            <img src={img8} alt="" />
            <h6>Polo Shirts</h6>
          </div>{" "}
          <div className="catImg">
            <img src={img9} alt="" />
            <h6>Coats &amp; Jackets</h6>
          </div>{" "}
          <div className="catImg">
            <img src={img10} alt="" />
            <h6>Blazers</h6>
          </div>
        </div>
      </div>
      <div className="productSection">
        <h6>{filteredProductCount} PRODUCTS</h6>
        <div className="productContent">
          {products.map((product) => (
            <div className="shopContent">
              <Link to={`/product/${product._id}`} key={product._id}>
                <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
                <div className="shopContentDetails">
                  <div className="detailsTitle">
                    <h5>{product.name}</h5> <AiOutlineHeart />
                  </div>
                  <h4>₦{product.price}</h4>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
      <Footer />
      {isScrolled ? <Replacement /> : null}
    </div>
  );
}
export default Shop;

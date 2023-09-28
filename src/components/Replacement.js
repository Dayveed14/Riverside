import img1 from "../images/logo(3).png";
import img2 from "../images/women.avif";
import img3 from "../images/men.avif";
import img4 from "../images/boys.avif";
import img5 from "../images/girls.avif";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { PiBag } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineHeart } from "react-icons/ai";
function Replacement() {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div>
      <div className={`navbar2 ${isNavActive ? "active" : ""}`}>
        <header>
          <div className="hamburger" onClick={toggleNav}>
            <div className={`line ${isNavActive ? "active" : ""}`}></div>
            <div className={`line ${isNavActive ? "active" : ""}`}></div>
            <div className={`line ${isNavActive ? "active" : ""}`}></div>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={img1} alt="" />
            </Link>
          </div>
          <nav className={`nav-bar ${isNavActive ? "active" : ""}`}>
            <ul className={`nav-links ${isNavActive ? "active" : ""}`}>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  WOMEN
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOne">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTwo">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThree">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFour">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFive">
                      <Link to="">
                        <h6>TRENDING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>New Season Edit</p>
                      </Link>
                      <Link to="">
                        <p>Red</p>
                      </Link>
                      <Link to="">
                        <p>Light Layers</p>
                      </Link>
                      <Link to="">
                        <p>Neutrals</p>
                      </Link>
                      <Link to="">
                        <p>Everyday Bags</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSix">
                      <Link to="">
                        <h6>BAGS & ACCESSORIES</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bags, Purses & Luggage</p>
                      </Link>
                      <Link to="">
                        <p>Jewellery</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSeven">
                      <Link to="">
                        <h6>COLLECTIONS & EDITS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Bridesmaid Outfits</p>
                      </Link>
                      <Link to="">
                        <p>Going Out</p>
                      </Link>
                      <Link to="">
                        <p>Holiday Shop</p>
                      </Link>
                      <Link to="">
                        <p> Gifts</p>
                      </Link>
                      <Link to="">
                        <p>Modest Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Occasionwear</p>
                      </Link>
                      <Link to="">
                        <p>Pastels</p>
                      </Link>
                      <Link to="">
                        <p>The Kind Society</p>
                      </Link>
                      <Link to="">
                        <p>Wedding Guest Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Workwear</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="/shop" className="dropbtn">
                  MEN
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOne">
                      <Link to="/shop">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="/shop">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTwo">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThree">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFour">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFive">
                      <Link to="">
                        <h6>TRENDING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>New Season Edit</p>
                      </Link>
                      <Link to="">
                        <p>Red</p>
                      </Link>
                      <Link to="">
                        <p>Light Layers</p>
                      </Link>
                      <Link to="">
                        <p>Neutrals</p>
                      </Link>
                      <Link to="">
                        <p>Everyday Bags</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSix">
                      <Link to="">
                        <h6>BAGS & ACCESSORIES</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bags, Purses & Luggage</p>
                      </Link>
                      <Link to="">
                        <p>Jewellery</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSeven">
                      <Link to="">
                        <h6>COLLECTIONS & EDITS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Bridesmaid Outfits</p>
                      </Link>
                      <Link to="">
                        <p>Going Out</p>
                      </Link>
                      <Link to="">
                        <p>Holiday Shop</p>
                      </Link>
                      <Link to="">
                        <p> Gifts</p>
                      </Link>
                      <Link to="">
                        <p>Modest Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Occasionwear</p>
                      </Link>
                      <Link to="">
                        <p>Pastels</p>
                      </Link>
                      <Link to="">
                        <p>The Kind Society</p>
                      </Link>
                      <Link to="">
                        <p>Wedding Guest Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Workwear</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img3} alt="" />
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  GIRLS
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOne">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTwo">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThree">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFour">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFive">
                      <Link to="">
                        <h6>TRENDING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>New Season Edit</p>
                      </Link>
                      <Link to="">
                        <p>Red</p>
                      </Link>
                      <Link to="">
                        <p>Light Layers</p>
                      </Link>
                      <Link to="">
                        <p>Neutrals</p>
                      </Link>
                      <Link to="">
                        <p>Everyday Bags</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSix">
                      <Link to="">
                        <h6>BAGS & ACCESSORIES</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bags, Purses & Luggage</p>
                      </Link>
                      <Link to="">
                        <p>Jewellery</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSeven">
                      <Link to="">
                        <h6>COLLECTIONS & EDITS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Bridesmaid Outfits</p>
                      </Link>
                      <Link to="">
                        <p>Going Out</p>
                      </Link>
                      <Link to="">
                        <p>Holiday Shop</p>
                      </Link>
                      <Link to="">
                        <p> Gifts</p>
                      </Link>
                      <Link to="">
                        <p>Modest Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Occasionwear</p>
                      </Link>
                      <Link to="">
                        <p>Pastels</p>
                      </Link>
                      <Link to="">
                        <p>The Kind Society</p>
                      </Link>
                      <Link to="">
                        <p>Wedding Guest Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Workwear</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img4} alt="" />
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  BOYS
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOne">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTwo">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThree">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFour">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFive">
                      <Link to="">
                        <h6>TRENDING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>New Season Edit</p>
                      </Link>
                      <Link to="">
                        <p>Red</p>
                      </Link>
                      <Link to="">
                        <p>Light Layers</p>
                      </Link>
                      <Link to="">
                        <p>Neutrals</p>
                      </Link>
                      <Link to="">
                        <p>Everyday Bags</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSix">
                      <Link to="">
                        <h6>BAGS & ACCESSORIES</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bags, Purses & Luggage</p>
                      </Link>
                      <Link to="">
                        <p>Jewellery</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSeven">
                      <Link to="">
                        <h6>COLLECTIONS & EDITS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Bridesmaid Outfits</p>
                      </Link>
                      <Link to="">
                        <p>Going Out</p>
                      </Link>
                      <Link to="">
                        <p>Holiday Shop</p>
                      </Link>
                      <Link to="">
                        <p> Gifts</p>
                      </Link>
                      <Link to="">
                        <p>Modest Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Occasionwear</p>
                      </Link>
                      <Link to="">
                        <p>Pastels</p>
                      </Link>
                      <Link to="">
                        <p>The Kind Society</p>
                      </Link>
                      <Link to="">
                        <p>Wedding Guest Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Workwear</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img5} alt="" />
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  HOLIDAY SHOP
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOn">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTw">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThre">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFou">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  EDITORIAL
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOn">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img2} alt="" />
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img2} alt="" />
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">WOMEN</Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img3} alt="" />
                <Link to="/shop" className="dropbtn">
                  MEN
                </Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">GIRLS</Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">BOYS</Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">HOLIDAY SHOP</Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">EDITORIAL</Link>
              </li>
            </ul>
          </nav>
          <div className="inner-right inner-right-bb">
            <ul>
              <li>
                <Link to="">
                  <CiSearch />
                </Link>
              </li>

              <div className="cartSection2">
                <Link to="/account">
                  <BsPersonCircle />
                </Link>
                <FaRegHeart />
                <Link to="/cart">
                  <PiBag />
                </Link>
              </div>
            </ul>
          </div>
        </header>
      </div>
      <div className={`navbar3 ${isNavActive ? "active" : ""}`}>
        <header>
          <div className="hamburger" onClick={toggleNav}>
            <div className={`line ${isNavActive ? "active" : ""}`}></div>
            <div className={`line ${isNavActive ? "active" : ""}`}></div>
            <div className={`line ${isNavActive ? "active" : ""}`}></div>
          </div>
          <div className="search">
            <CiSearch />
          </div>
          <div className="logo">
            <Link to="/">
              <img src={img1} alt="" />
            </Link>
          </div>
          <nav className={`nav-bar ${isNavActive ? "active" : ""}`}>
            <ul className={`nav-links ${isNavActive ? "active" : ""}`}>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  WOMEN
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOne">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTwo">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThree">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFour">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFive">
                      <Link to="">
                        <h6>TRENDING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>New Season Edit</p>
                      </Link>
                      <Link to="">
                        <p>Red</p>
                      </Link>
                      <Link to="">
                        <p>Light Layers</p>
                      </Link>
                      <Link to="">
                        <p>Neutrals</p>
                      </Link>
                      <Link to="">
                        <p>Everyday Bags</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSix">
                      <Link to="">
                        <h6>BAGS & ACCESSORIES</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bags, Purses & Luggage</p>
                      </Link>
                      <Link to="">
                        <p>Jewellery</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSeven">
                      <Link to="">
                        <h6>COLLECTIONS & EDITS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Bridesmaid Outfits</p>
                      </Link>
                      <Link to="">
                        <p>Going Out</p>
                      </Link>
                      <Link to="">
                        <p>Holiday Shop</p>
                      </Link>
                      <Link to="">
                        <p> Gifts</p>
                      </Link>
                      <Link to="">
                        <p>Modest Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Occasionwear</p>
                      </Link>
                      <Link to="">
                        <p>Pastels</p>
                      </Link>
                      <Link to="">
                        <p>The Kind Society</p>
                      </Link>
                      <Link to="">
                        <p>Wedding Guest Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Workwear</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="/shop" className="dropbtn">
                  MEN
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOne">
                      <Link to="/shop">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="/shop">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTwo">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThree">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFour">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFive">
                      <Link to="">
                        <h6>TRENDING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>New Season Edit</p>
                      </Link>
                      <Link to="">
                        <p>Red</p>
                      </Link>
                      <Link to="">
                        <p>Light Layers</p>
                      </Link>
                      <Link to="">
                        <p>Neutrals</p>
                      </Link>
                      <Link to="">
                        <p>Everyday Bags</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSix">
                      <Link to="">
                        <h6>BAGS & ACCESSORIES</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bags, Purses & Luggage</p>
                      </Link>
                      <Link to="">
                        <p>Jewellery</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSeven">
                      <Link to="">
                        <h6>COLLECTIONS & EDITS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Bridesmaid Outfits</p>
                      </Link>
                      <Link to="">
                        <p>Going Out</p>
                      </Link>
                      <Link to="">
                        <p>Holiday Shop</p>
                      </Link>
                      <Link to="">
                        <p> Gifts</p>
                      </Link>
                      <Link to="">
                        <p>Modest Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Occasionwear</p>
                      </Link>
                      <Link to="">
                        <p>Pastels</p>
                      </Link>
                      <Link to="">
                        <p>The Kind Society</p>
                      </Link>
                      <Link to="">
                        <p>Wedding Guest Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Workwear</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img3} alt="" />
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  GIRLS
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOne">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTwo">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThree">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFour">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFive">
                      <Link to="">
                        <h6>TRENDING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>New Season Edit</p>
                      </Link>
                      <Link to="">
                        <p>Red</p>
                      </Link>
                      <Link to="">
                        <p>Light Layers</p>
                      </Link>
                      <Link to="">
                        <p>Neutrals</p>
                      </Link>
                      <Link to="">
                        <p>Everyday Bags</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSix">
                      <Link to="">
                        <h6>BAGS & ACCESSORIES</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bags, Purses & Luggage</p>
                      </Link>
                      <Link to="">
                        <p>Jewellery</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSeven">
                      <Link to="">
                        <h6>COLLECTIONS & EDITS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Bridesmaid Outfits</p>
                      </Link>
                      <Link to="">
                        <p>Going Out</p>
                      </Link>
                      <Link to="">
                        <p>Holiday Shop</p>
                      </Link>
                      <Link to="">
                        <p> Gifts</p>
                      </Link>
                      <Link to="">
                        <p>Modest Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Occasionwear</p>
                      </Link>
                      <Link to="">
                        <p>Pastels</p>
                      </Link>
                      <Link to="">
                        <p>The Kind Society</p>
                      </Link>
                      <Link to="">
                        <p>Wedding Guest Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Workwear</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img4} alt="" />
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  BOYS
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOne">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTwo">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThree">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFour">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFive">
                      <Link to="">
                        <h6>TRENDING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>New Season Edit</p>
                      </Link>
                      <Link to="">
                        <p>Red</p>
                      </Link>
                      <Link to="">
                        <p>Light Layers</p>
                      </Link>
                      <Link to="">
                        <p>Neutrals</p>
                      </Link>
                      <Link to="">
                        <p>Everyday Bags</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSix">
                      <Link to="">
                        <h6>BAGS & ACCESSORIES</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bags, Purses & Luggage</p>
                      </Link>
                      <Link to="">
                        <p>Jewellery</p>
                      </Link>
                    </div>{" "}
                    <div className="linkSeven">
                      <Link to="">
                        <h6>COLLECTIONS & EDITS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Bridesmaid Outfits</p>
                      </Link>
                      <Link to="">
                        <p>Going Out</p>
                      </Link>
                      <Link to="">
                        <p>Holiday Shop</p>
                      </Link>
                      <Link to="">
                        <p> Gifts</p>
                      </Link>
                      <Link to="">
                        <p>Modest Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Occasionwear</p>
                      </Link>
                      <Link to="">
                        <p>Pastels</p>
                      </Link>
                      <Link to="">
                        <p>The Kind Society</p>
                      </Link>
                      <Link to="">
                        <p>Wedding Guest Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Workwear</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img5} alt="" />
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  HOLIDAY SHOP
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOn">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkTw">
                      <Link to="">
                        <h6>CLOTHING</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>All Womenswear</p>
                      </Link>
                      <Link to="">
                        <p>Blazers</p>
                      </Link>
                      <Link to="">
                        <p>Coats & Jackets</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Dresses</p>
                      </Link>
                      <Link to="">
                        <p>Co-ord Sets</p>
                      </Link>
                      <Link to="">
                        <p>Hoodies & Sweats</p>
                      </Link>
                      <Link to="">
                        <p>Jumpers & Cardigans</p>
                      </Link>
                      <Link to="">
                        <p>Leggings & Joggers</p>
                      </Link>
                      <Link to="">
                        <p>Jumpsuits & Playsuits</p>
                      </Link>
                      <Link to="">
                        <p>Nightwear & Slippers</p>
                      </Link>
                      <Link to="">
                        <p>Jeans</p>
                      </Link>
                      <Link to="">
                        <p>Shorts</p>
                      </Link>
                      <Link to="">
                        <p>Skirts</p>
                      </Link>
                      <Link to="">
                        <p>Suits & Tailoring</p>
                      </Link>
                      <Link to="">
                        <p>Swimwear & Beachwear</p>
                      </Link>
                      <Link to="">
                        <p>T-shirts & Vests</p>
                      </Link>
                      <Link to="">
                        <p>Tops</p>
                      </Link>
                      <Link to="">
                        <p>Trousers</p>
                      </Link>
                      <Link to="">
                        <p>Underwear</p>
                      </Link>
                    </div>{" "}
                    <div className="linkThre">
                      <Link to="">
                        <h6>SHOES & BOOTS</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Shoes & Boots</p>
                      </Link>
                      <Link to="">
                        <p>Boots</p>
                      </Link>
                      <Link to="">
                        <p>Heels</p>
                      </Link>
                      <Link to="">
                        <p>Sandals</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Trainers</p>
                      </Link>
                    </div>{" "}
                    <div className="linkFou">
                      <Link to="">
                        <h6>SHOP BY FIT</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>Plus</p>
                      </Link>
                      <Link to="">
                        <p>Petite</p>
                      </Link>
                      <Link to="">
                        <p>Maternity</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dropdown2 nav-item desktop">
                <Link to="" className="dropbtn">
                  EDITORIAL
                </Link>
                <div className="dropdown-content">
                  <div className="dropdownLinkLeft">
                    <div className="linkOn">
                      <Link to="">
                        <h6>NEW IN</h6>
                      </Link>
                      <hr />
                      <Link to="">
                        <p>View All</p>
                      </Link>
                      <Link to="">
                        <p>Clothing</p>
                      </Link>
                      <Link to="">
                        <p>Shoes</p>
                      </Link>
                      <Link to="">
                        <p>Bags & Accessories</p>
                      </Link>
                      <Link to="">
                        <p>Bestsellers</p>
                      </Link>
                    </div>
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img2} alt="" />
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img2} alt="" />
                  </div>
                  <div className="dropdownLinkRight">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">WOMEN</Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img3} alt="" />
                <Link to="/shop" className="dropbtn">
                  MEN
                </Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">GIRLS</Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">BOYS</Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">HOLIDAY SHOP</Link>
              </li>
              <li className="nav-item mobile dropdown2">
                <img src={img2} alt="" />
                <Link className="dropbtn">EDITORIAL</Link>
              </li>
            </ul>
          </nav>
          <div className="mobileNav">
            <Link to="/">
              <img src={img1} alt="" />
            </Link>
          </div>
          <div className="inner-right2">
            <ul>
              <li>
                <AiOutlineHeart />
              </li>
              <li className="mobileCart">
                <Link to="/cart">
                  <PiBag />
                </Link>
              </li>
            </ul>
          </div>
          <div className="inner-right">
            <ul>
              <li></li>
            </ul>
          </div>
        </header>
      </div>
    </div>
  );
}
export default Replacement;

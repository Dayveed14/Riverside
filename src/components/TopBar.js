import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { PiBag } from "react-icons/pi";
import img1 from "../images/uk.png";
import { useState, useEffect } from "react";

function TopBar() {
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    const cartData = sessionStorage.getItem("cart");

    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      const subTotal = parsedCart.reduce((total, item) => {
        return total + item.price;
      }, 0);

      setSubtotal(subTotal);
    }
  }, []);

  const total = subtotal;

  return (
    <div className="topBar">
      <div className="language">
        <p>₦</p>
        <img src={img1} alt="" />
      </div>
      <Link className="first-child" to="">
        Free standard delivery | Find out more
      </Link>
      <Link to="">Gift great taste | Gift cards</Link>
      <Link to="">Shop now & Pay in 3 with Klarna</Link>
      <div className="cartIconSection">
        <Link to="/account">
          <BsPersonCircle />
        </Link>
        <FaRegHeart />
        <div className="cartIcon">
          <Link to="/cart">
            <PiBag />
          </Link>
          <p>₦ {total}</p>
        </div>
      </div>
    </div>
  );
}
export default TopBar;

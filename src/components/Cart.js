import img1 from "../images/logo(3).png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import img0 from "../images/american-express.png";
import img2 from "../images/visa.png";
import img3 from "../images/paypal.png";
import img4 from "../images/card.png";
import { GrClose } from "react-icons/gr";
function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartData = sessionStorage.getItem("cart");
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      setCartItems(parsedCart);
      const subTotal = parsedCart.reduce((total, item) => {
        return total + item.price;
      }, 0);
      setSubtotal(subTotal);
      setTotalPrice(subTotal);
    }
  }, []);

  const removeItemFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));

    const newSubtotal = updatedCart.reduce((total, item) => {
      return total + item.price;
    }, 0);
    setSubtotal(newSubtotal);
    setTotalPrice(newSubtotal);
  };
  return (
    <div className="account">
      <nav>
        <Link to="/">
          <img src={img1} alt="" />
        </Link>
      </nav>
      <div className="cartPage">
        <div className="checkout">
          <Link to={"/shop"} className="checkoutBack">
            <BsArrowLeft />
            Continue Shopping
          </Link>
          <Link className="addToCartBtn">Checkout</Link>
        </div>
        <h1>MY SHOPPING BAG</h1>
        <table className="cartItemsTable">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td className="tbleImage">
                  <img src={`http://159.65.21.42:9000${item.image}`} alt="" />
                </td>
                <td>{item.name}</td>
                <td>
                  <select className="size-select">
                    <option value="S">Select Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </select>
                </td>
                <td className="quantity-control">
                  <button className="decrement">-</button>
                  <span>1</span>
                  <button className="increment">+</button>
                </td>
                <td>₦{item.price}</td>{" "}
                <td>
                  <Link onClick={() => removeItemFromCart(index)}>
                    <GrClose />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mobileTable">
          {cartItems.map((item, index) => (
            <div key={index} className="modalBody">
              <div className="modalImg">
                <img src={`http://159.65.21.42:9000${item.image}`} alt="" />
              </div>
              <div className="modalText">
                <span>
                  <p>
                    {item.name}
                    <Link onClick={() => removeItemFromCart(index)}>
                      <GrClose />
                    </Link>
                  </p>
                </span>

                <h6>₦{item.price}</h6>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <Link className="promo">Have a promo code?</Link>
        <div className="total">
          <div className="totalLeft">
            <Link>Have a promo code?</Link>
          </div>
          <div className="totalRight">
            <div className="subTotal">
              <p>Subtotal</p>
              <p>{subtotal}</p>
            </div>
            <div className="grandTotal">
              <h3>
                Total <span>(Excl. Delivery)</span>
              </h3>

              <h3>{totalPrice}</h3>
            </div>
            <div className="chckBtn">
              <Link to={"/shop"} className="addToCartBtn">
                Checkout
              </Link>
            </div>
            <div className="paymentCards">
              <img src={img4} alt="" />
              <img src={img2} alt="" />
              <img src={img0} alt="" />
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className="chckBtn2">
          <Link to={"/shop"} className="addToBtn">
            Checkout
          </Link>
        </div>
        <div className="paymentCards2">
          <img src={img4} alt="" />
          <img src={img2} alt="" />
          <img src={img0} alt="" />
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Cart;

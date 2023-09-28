import Navigation from "./Navigation";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import TopBar from "./TopBar";
import Replacement from "./Replacement";
import UseScroll from "./UseScroll";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineHeart } from "react-icons/ai";
import { PiTruckBold } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";

function SingleProduct() {
  const isScrolled = UseScroll();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCart = () => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    setCartItems(cart);
    handleShow();
  };

  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    fetch(`http://159.65.21.42:9000/product/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);

        const cartData = sessionStorage.getItem("cart");
        if (cartData) {
          const parsedCart = JSON.parse(cartData);
          setCartItems(parsedCart);
          setItemCount(parsedCart.length);
          const subTotal = parsedCart.reduce((total, item) => {
            return total + item.price;
          }, 0);

          setSubTotal(subTotal);
        }
      });
  }, [productId]);

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
      <div className="singlePdt">
        <div className="main">
          <div className="leftMain">
            <img src={`http://159.65.21.42:9000${product.image}`} alt="" />
          </div>
          <div className="rightMain">
            <div className="rightTitle">
              <h1>{product.name}</h1>
              <h6>₦{product.price}</h6>
            </div>
            <select className="sizeSelect">
              <option value="S" id="selectSize">
                Select Size
              </option>
              <option value="S" id="S">
                S
              </option>
              <option value="M" id="M">
                M
              </option>
              <option value="L" id="L">
                L
              </option>
            </select>
            <Link className="sizeChart"> SIZE CHART</Link>
            <p>Our model wears a UK M and is 185.5cm/6'1'' tall</p>
            <Modal
              className="modal fade modal-right"
              show={show}
              onHide={handleClose}
            >
              <Modal.Header closeButton>
                <Modal.Title>ADDED ITEMS ({itemCount})</Modal.Title>
              </Modal.Header>
              <Modal.Body className="modal-dialog modal-dialog-scrollable">
                {cartItems.map((item, index) => (
                  <div key={index} className="modalBody">
                    <div className="modalImg">
                      <img
                        src={`http://159.65.21.42:9000${item.image}`}
                        alt=""
                      />
                    </div>
                    <div className="modalText">
                      <p>{item.name}</p>
                      <h6>₦{item.price}</h6>
                    </div>
                  </div>
                ))}
                <div className="modalTotal">
                  <h2>
                    Total <span>(Excl. Delivery)</span>
                  </h2>
                  <h6>
                    <b>₦{subTotal}</b>
                  </h6>
                </div>
                <Link className="modalBtn1" to="/cart">
                  View Bag
                </Link>
                <Link className="modalBtn">Checkout</Link>
              </Modal.Body>
            </Modal>
            <div className="addBag">
              <Link className="addToCartBtn" onClick={addToCart}>
                Add to bag
              </Link>
              <AiOutlineHeart />
            </div>
            <p>Pay in 3 payments of ₦25.34 Learn more.</p>
            <h6>
              <PiTruckBold />
              Delivery
            </h6>
            <h6>
              <HiOutlineLocationMarker />
              Find In Store <br /> Check stock in your local stores
            </h6>
          </div>
        </div>
      </div>
      <ContactSection />
      <Footer />
      {isScrolled ? <Replacement /> : null}
    </div>
  );
}
export default SingleProduct;

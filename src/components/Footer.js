import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      {" "}
      <footer>
        <div className="footer">
          <div className="container1">
            <h2>HOW CAN WE HELP?</h2>
            <hr />
            <div className="innerLinks">
              <div className="leftSide">
                <ul className="">
                  <li className="">
                    <Link>Delivery</Link>
                  </li>
                  <li className="">
                    <Link>Returns</Link>
                  </li>
                  <li className="">
                    <Link>Gift Cards</Link>
                  </li>
                  <li className="">
                    <Link>Size Guides</Link>
                  </li>
                  <li className="">
                    <Link>Women's Plus Size Guide</Link>
                  </li>
                  <li className="">
                    <Link>Product Recalls</Link>
                  </li>
                </ul>
              </div>
              <div className="rightSide">
                <ul className="">
                  <li className="">
                    <Link>FAQ and Contact Us</Link>
                  </li>
                  <li className="">
                    <Link>My Account</Link>
                  </li>
                  <li className="">
                    <Link>Find A Store</Link>
                  </li>
                  <li className="">
                    <Link>Student Discount</Link>
                  </li>
                  <li className="">
                    <Link>Blue Light Card Discount</Link>
                  </li>
                  <li className="">
                    <Link>Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container2">
            <h2>USEFUL INFO</h2>
            <hr />
            <div className="container2Link">
              <ul className="">
                <li className="">
                  <Link>Terms & Conditions</Link>
                </li>
                <li className="">
                  <Link>Promotion Terms & Conditions</Link>
                </li>
                <li className="">
                  <Link>Privacy Notice & Cookies</Link>
                </li>
                <li className="">
                  <Link>Security</Link>
                </li>
                <li className="">
                  <Link>Accessibility</Link>
                </li>
                <li className="">
                  <Link>User Generated Content Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container3">
            <h2>INSIDE RIVER ISLAND</h2>
            <hr />
            <div className="container3Link">
              <ul className="">
                <li className="">
                  <Link>About Us</Link>
                </li>
                <li className="">
                  <Link>Sustainability</Link>
                </li>
                <li className="">
                  <Link>Careers At River Island</Link>
                </li>
                <li className="">
                  <Link>Partner with Us</Link>
                </li>
                <li className="">
                  <Link>Charity Donations</Link>
                </li>
                <li className="">
                  <Link>Gender Pay Gap Report</Link>
                </li>
                <li className="">
                  <Link>Westgate Pension Benefits</Link>
                </li>
                <li className="">
                  <Link>Modern Slavery Statement</Link>
                </li>
                <li className="">
                  <Link>Corporate Governance Statement</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="main" id="section2">
        <a href="#section1">Back To Top</a>
      </div>
    </div>
  );
}
export default Footer;

import { Link } from "react-router-dom";
function ContactSection() {
  return (
    <div className="newsLetter">
      <h1>ARE YOU AN RI INSIDER YET?</h1>
      <small>Sign up for the latest fashion and offers.</small>
      <form action="">
        <input
          type="email"
          name="Sign"
          id="Sign"
          placeholder="Enter Your Email"
        />

        <div className="checkbox2">
          <div className="checkbox2Parent">
            <div>
              <input type="checkbox" name="Women" id="Women" />
              <label htmlFor="Women">Women</label>
            </div>
            <div>
              <input type="checkbox" name="Men" id="Men" />
              <label htmlFor="Men">Men</label>
            </div>
          </div>
          <div className="checkbox2Parent2">
            <div>
              <input type="checkbox" name="Kids" id="Kids" />
              <label htmlFor="Kids">Kids</label>
            </div>
            <div>
              <input type="checkbox" name="Beauty" id="Beauty" />
              <label htmlFor="Beauty">Beauty</label>
            </div>
          </div>
        </div>
        <button>Sign Up Now</button>
        <br />
        <div className="checkbox">
          <input type="checkbox" name="Women" id="Women" />
          <label htmlFor="Women">Women</label>
          <input type="checkbox" name="Men" id="Men" />
          <label htmlFor="Men">Men</label>
          <input type="checkbox" name="Kids" id="Kids" />
          <label htmlFor="Kids">Kids</label>
          <input type="checkbox" name="Beauty" id="Beauty" />
          <label htmlFor="Beauty">Beauty</label>
        </div>
      </form>
      <small>
        Your personal details are safe with us. For more info, read our{" "}
        <Link>Privacy Notice</Link>
      </small>
    </div>
  );
}
export default ContactSection;

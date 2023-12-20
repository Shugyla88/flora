import React from "react";
import "./Footer.styles.css";
const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start bg-light text-muted mt-4">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
        </div>
      </section>
      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <div className=" mb-4">
              </div>
              <p>
                We offer our ultimate gratitude towards this amazing nature by
                providing the best agricultural plants in order sustain a
                greener future.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Navigation</h6>
              <p>
                <a href="/about" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="/shop" className="text-reset">
                  Shop
                </a>
              </p>
              <p>
                <a href="/blog" className="text-reset">
                  Blog
                </a>
              </p>
              <p>
                <a href="/contact" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            </div>
          </div>
        </div>
      </section>
      <div className="text-center p-4">
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="/">
          {" "}
          Flora
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="info">
        <h3>INFO</h3>
        <a href="#">Formats</a>
        <a href="#">Compression</a>
        <a href="#">Pricing</a>
        <a href="#">FAQ</a>
        <a href="#">Status</a>
      </div>
      <div className="resources">
        <h3>RESOURCES</h3>
        <a href="#">Developer API</a>
        <a href="#">Tools</a>
        <a href="#">Blog</a>
      </div>
      <div className="company">
        <h3>COMPANY</h3>
        <a href="#">About Us</a>
        <a href="#">Sustainabillity</a>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy</a>
      </div>
      <div className="sub-social">
        <div className="subscribe">
          <p>Subscribe to our email newsletter</p>
          <div className="sub-input">
            <input placeholder="Your email" type="text" />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="social">
          <p>Contact me on social media</p>
          <div className="social-img">
            <a href="https://www.linkedin.com/in/ali-asghar-sedighian-53b80b25b/">
              <img
                src="http://localhost:3000/images/social/linkedin.png"
                alt=""
              />
            </a>
            <a href="https://twitter.com/AliA_sedighian">
              <img
                src="http://localhost:3000/images/social/twitter.PNG"
                alt=""
              />
            </a>
            <a href="https://www.instagram.com/ali_asghar.sedighian/">
              <img
                src="http://localhost:3000/images/social/instagram.PNG"
                alt=""
              />
            </a>
            <a href="https://telegram.me/aliasghar_sedighian">
              <img
                src="http://localhost:3000/images/social/telegram-logo.png"
                alt=""
              />
            </a>
            <a href="https://www.facebook.com/aliasghar.sedighian.3/">
              <img
                src="http://localhost:3000/images/social/facebook.PNG"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/facebook-icon.png" alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/instagram-icon.png" alt="Instagram" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter-icon.png" alt="Twitter" />
        </a>
      </div>
      <div className="footer-text">
        © 2024 Your Company | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;

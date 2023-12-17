import React from "react";
import "./Footer.css";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer ">
      <div class="container w-100">
        <div class="wrapper">
          <div class="footer-widget">
            <a href="#">
              <h3>GTS LOGO</h3>
            </a>
            <p class="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deserunt magni recusandae ut! Natus?
            </p>
            <ul class="socials">
              <li>
                <a href="#">
                  <i>
                    <FaFacebook />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <FaTwitter />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i>
                    <FaLinkedin />
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div class="footer-widget">
            <h6>Quick Link</h6>
            <ul class="links">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">service</a>
              </li>
              <li>
                <a href="#">testimonial</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div class="footer-widget">
            <h6>Services</h6>
            <ul class="links">
              <li>
                <a href="#">web design</a>
              </li>
              <li>
                <a href="#">web development</a>
              </li>
              <li>
                <a href="#">seo optimization</a>
              </li>
              <li>
                <a href="#">blog writing</a>
              </li>
            </ul>
          </div>
          <div class="footer-widget">
            <h6>Help &amp; Support</h6>
            <ul class="links">
              <li>
                <a href="#">support center</a>
              </li>
              <li>
                <a href="#">live chat</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">terms &amp; conditions</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="copyright-wrapper">
          <p>
            Design and Developed by
            <a href="#" target="blank">
              GeekTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

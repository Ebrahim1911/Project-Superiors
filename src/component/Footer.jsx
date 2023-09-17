import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <article>
          <Link to="/">
            <img className="logo" src={logo} alt="Footer Logo"></img>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            natus exercitationem distinctio tenetur labore officia corporis
            omnis
          </p>
          <div className="footer-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permaiinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s">Blog</Link>
          <Link to="/s">Case Studies</Link>
          <Link to="/s">Events</Link>
          <Link to="/s">Communites</Link>
          <Link to="/s">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact Us</Link>
          <Link to="/s">Support</Link>
        </article>
      </div>
      <div className="footer-copyright">
        <small>2023 Egator Tutorials &copy;</small>
      </div>
    </footer>
  );
}

export default Footer;

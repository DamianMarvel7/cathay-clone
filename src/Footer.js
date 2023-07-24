import angleDown from "./images/angle-down.svg";
import facebook from "./images/facebook.svg";
import twitter from "./images/twitter.svg";
import linkedin from "./images/linkedin.svg";
import instagram from "./images/instagram.svg";
import youtube from "./images/youtube.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <footer>
      <div className="about-container">
        <div
          className="about"
          style={{
            display: "grid",
            gridTemplateRows: isClicked ? "0.1fr 1fr" : "1fr 0fr",
          }}
          onClick={handleClick}
        >
          <div className="about-visible flexrow">
            <p>About us</p>
            <img src={angleDown} alt="" className="icon" />
          </div>
          <div className="about-hidden flexcol">
            <Link to="/about">About the Cathay Pacific Group</Link>
            <Link to="/apps">Cathay apps</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/commitment">Our commitment to you</Link>
            <Link to="/partnership">Partnership opportunities</Link>
          </div>
        </div>
      </div>
      <div className="social-content">
        <p>Connect with us</p>
        <img src={facebook} alt="" className="icon" />
        <img src={twitter} alt="" className="icon" />
        <img src={linkedin} alt="" className="icon" />
        <img src={instagram} alt="" className="icon" />
        <img src={youtube} alt="" className="icon" />
      </div>
      <div className="language">
        <p>United States</p>
      </div>
      <div className="copyright">
        <p>Copyright © Cathay Pacific Airways Limited 國泰航空有限公司</p>
      </div>
    </footer>
  );
};

export default Footer;
<footer></footer>;

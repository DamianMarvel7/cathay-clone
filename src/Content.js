import contentImage1 from "./images/content-image1.jpg";
import contentImage2 from "./images/content-image2.jpg";
import contentImage3 from "./images/content-image3.jpg";
import contentImage4 from "./images/content-image4.jpg";
import contentImage5 from "./images/content-image5.jpg";
import gallery1 from "./images/gallery1.jpg";
import gallery2 from "./images/gallery2.jpg";
import gallery3 from "./images/gallery3.jpg";
import gallery4 from "./images/gallery4.jpg";
import gallery5 from "./images/gallery5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faPlane,
  faClipboardCheck,
  faReceipt,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Content = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOptionClicked, setIsOptionClicked] = useState(false);
  const elmt = isClicked ? faMinus : faPlus;

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };
  // const handleOptionClick = () => {
  //   setIsOptionClicked((prevState) => !prevState);
  // };

  const setTabMoreDisplay = () => {
    const tabMoreElement = document.querySelector(".booking-panel-tabmore");
    const bookingPanel = document.querySelector(".booking-panel");
    const tabMoreElementDisplay = window
      .getComputedStyle(tabMoreElement)
      .getPropertyValue("display");
    if (tabMoreElementDisplay == "none") {
      bookingPanel.style.gridTemplateRows = "0.1fr 1fr";
      tabMoreElement.style.display = "block";
    } else {
      bookingPanel.style.gridTemplateRows = "0.1fr 0fr";
      tabMoreElement.style.display = "none";
    }
  };

  return (
    <div className="content">
      <div className="booking-panel">
        <div className="booking-panel-tab1 flexcol">
          <div
            className="booking-panel-taboption flexrow"
            onClick={setTabMoreDisplay}
          >
            <h3 className="button-style3" data-icon="airplane">
              <div className="iconFa">
                <FontAwesomeIcon icon={faPlane} />
              </div>
              Book a trip
            </h3>
            <FontAwesomeIcon icon={elmt} />
          </div>
        </div>
        <div className="booking-panel-tab2">
          <Link className="button-link">
            <div className="booking-panel-taboption flexrow">
              <h3>
                <div className="iconFa">
                  <FontAwesomeIcon icon={faReceipt} />
                </div>
                Redeem flights
              </h3>
            </div>
          </Link>
        </div>

        <div className="booking-panel-tabmore">
          <div className="booking-panel-tablist flexrow">
            <Link to="/flights">Flights</Link>
            <Link to="/hotels">Hotels</Link>
            <Link to="/flight-and-hotels">Flight + Hotels</Link>
          </div>
          <div className="booking-panel-input flexcol">
            <h4>Leaving from</h4>
            <input type="text" placeholder="Los Angeles,(LAX)" />
          </div>
          <div className="booking-panel-input">
            <h4>Going to</h4>
            <input type="text" placeholder="Select a destination" />
          </div>
          <div className="booking-panel-input">
            <h4>Trip type</h4>
            <input type="text" placeholder="Return" />
          </div>
          <div className="booking-panel-input">
            <h4>Cabin class and passengers</h4>
            <input type="text" placeholder="Economy, 1 Adult" />
          </div>
          <div className="booking-panel-input">
            <h4>Departing On</h4>
            <input type="text" placeholder="20 Jul 2023" />
          </div>
          <div className="booking-panel-input">
            <h4>Returning On</h4>
            <input type="text" placeholder="27 Jul 2023" />
          </div>
          <span className="button-style">Search flights</span>
        </div>

        <div className="booking-panel-tab2">
          <Link className="button-link">
            <div className="booking-panel-taboption flexrow">
              <h3>
                <div className="iconFa">
                  <FontAwesomeIcon icon={faClipboardCheck} />
                </div>
                Manage Booking
              </h3>
            </div>
          </Link>
        </div>

        <div className="booking-panel-tab2">
          <Link className="button-link">
            <div className="booking-panel-taboption flexrow">
              <h3>
                <div className="iconFa">
                  <FontAwesomeIcon icon={faPlaneDeparture} />
                </div>
                Check In
              </h3>
            </div>
          </Link>
        </div>
      </div>
      <div className="content-block">
        <div className="contentBlock-textCard-Container">
          <div className="contentBlock-textCard">
            <div className="header flexcol">
              <h3 className="headerTop-text">Flights</h3>
              <h2 className="headerMiddle-text">
                Your next adventure is waiting
              </h2>
              <p>
                Start planning your dream holiday with our flight offers and
                travel inspiration.
              </p>
            </div>
            <img src={contentImage1} alt="" className="content-img" />
            <div className="contentBlock-textCard-text contentBlock-textCard-textRight">
              <h3>How to travel with confidence in 2023</h3>
              <p>
                Ready to jet-off on your next journey? Here's everything you
                need to know before you take to the skies.
              </p>
              <span>Read more</span>
            </div>
          </div>
          <div className="contentBlock-textCard">
            <img
              src={contentImage2}
              alt=""
              className="content-img content-img2"
            />
            <div className="contentBlock-textCard-text">
              <h3>Enjoy 24-hour free cancelation</h3>
              <p>
                As a Cathay member, book flights with greater peace of mind
                knowing that you can cancel your ticket free of change within 24
                hours.
              </p>
              <span>Read more</span>
            </div>
          </div>
        </div>
      </div>
      <div className="gallery-container">
        <div className="offerCard flexrow">
          <p>Our latest offers from:</p>
          <select>
            <option value="seoul" selected>
              Seoul
            </option>
            <option value="tokyo">Tokyo</option>
            <option value="shanghai">Shanghai</option>
          </select>
        </div>
        <div className="galleries snap-inline">
          <div className="gallery flexcol">
            <img src={gallery1} alt="" className="gallery-img" />
            <div className="gallery-desc">
              <p className="gallery-city">Seoul</p>
              <p className="gallery-class">Economy</p>
              <p className="gallery-price">
                from <span>USD1,547</span>
              </p>
              <p className="gallery-book">Book now</p>
            </div>
          </div>
          <div className="gallery flexcol">
            <img src={gallery2} alt="" className="gallery-img" />
            <div className="gallery-desc">
              <p className="gallery-city">Tokyo</p>
              <p className="gallery-class">Economy</p>
              <p className="gallery-price">
                from <span>USD1,483</span>
              </p>
              <p className="gallery-book">Book now</p>
            </div>
          </div>
          <div className="gallery flexcol">
            <img src={gallery3} alt="" className="gallery-img" />
            <div className="gallery-desc">
              <p className="gallery-city">Hongkong</p>
              <p className="gallery-class">Economy</p>
              <p className="gallery-price">
                from <span>USD1,390</span>
              </p>
              <p className="gallery-book">Book now</p>
            </div>
          </div>
          <div className="gallery flexcol">
            <img src={gallery4} alt="" className="gallery-img" />
            <div className="gallery-desc">
              <p className="gallery-city">Singapore</p>
              <p className="gallery-class">Economy</p>
              <p className="gallery-price">
                from <span>USD1,483</span>
              </p>
              <p className="gallery-book">Book now</p>
            </div>
          </div>
          <div className="gallery flexcol">
            <img src={gallery5} alt="" className="gallery-img" />
            <div className="gallery-desc">
              <p className="gallery-city">Tokyo</p>
              <p className="gallery-class">Economy</p>
              <p className="gallery-price">
                from <span>USD1,723</span>
              </p>
              <p className="gallery-book">Book now</p>
            </div>
          </div>
          <div className="gallery flexcol">
            <img src={gallery1} alt="" className="gallery-img" />
            <div className="gallery-desc">
              <p className="gallery-city">Seoul</p>
              <p className="gallery-class">Economy</p>
              <p className="gallery-price">
                from <span>USD1,731</span>
              </p>
              <p className="gallery-book">Book now</p>
            </div>
          </div>
        </div>

        <button className="button-style2">Book Today</button>
      </div>
      <div className="content-block">
        <div className="header">
          <h3 className="headerTop-text">Payment</h3>
          <h2 className="headerMiddle-text">Rewards for everyday spending</h2>
          <p className="headerBottom-text">
            Elevate for everyday spending with the Cathay Pacific Visa Card.
            Earn miles and Status Point for your purchases-and explore a
            universe of exclusive benefits.
          </p>
        </div>

        <div className="contentBlock-textCard contentBlock-textCard2">
          <img
            src={contentImage3}
            alt=""
            className="content-img content-img2"
          />
          <div className="contentBlock-textCard-text">
            <h3>Earn 35,000 Asia Miles when to open an account</h3>
            <p>Limited time offer</p>
            <span>Click here to learn more</span>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="header">
          <h3 className="headerTop-text">Holidays</h3>
          <h2 className="headerMiddle-text">Book your perfect vacation</h2>
          <p className="headerBottom-text">
            Earn miles when you book hotels, transport, travel experiences and
            more-and then use those miles to unlock even more rewards.
          </p>
        </div>

        <div className="contentBlock-textCard contentBlock-textCard2">
          <img
            src={contentImage4}
            alt=""
            className="content-img content-img2"
          />
          <div className="contentBlock-textCard-text">
            <h3>Exclusive vacation offers</h3>
            <p>
              We're constantly adding amazing new vacation deals and travel
              packages to give you the best experience.
            </p>
            <span>Explore current offers</span>
          </div>
        </div>
      </div>
      <div className="content-block">
        <div className="header">
          <h3 className="headerTop-text">Shopping</h3>
          <h2 className="headerMiddle-text">Elevate your lifestyle</h2>
          <p className="headerBottom-text">
            We've curated selection of product and partners to elevate your life
          </p>
        </div>

        <div className="contentBlock-textCard contentBlock-textCard2">
          <img
            src={contentImage5}
            alt=""
            className="content-img content-img2"
          />
          <div className="contentBlock-textCard-text">
            <h3>Endless shopping offfers</h3>
            <p>
              From seasonal promotions to monthly shopping surprises, we offer
              endless great deals for you to treat yourself or your loved ones.
            </p>
            <span>Shop now</span>
          </div>
        </div>
        <button className="button-style2">
          Find out more for Cathay membership
        </button>
      </div>
    </div>
  );
};

export default Content;

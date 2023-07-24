import { Link } from "react-router-dom";
import airline from "./images/airline.jpg";
import angleRight from "./images/angle-right.svg";

const Menu = () => {
  return (
    <div className="menu">
      <img src={airline} alt="" className="airline-img" />
      <ul>
        <li>
          <div className="menu-link flexrow">
            <Link to="/">Home</Link>
            <img src={angleRight} alt="" className="icon" />
          </div>
        </li>
        <li>
          <div className="menu-link flexrow">
            <Link to="/flight">Flight</Link>
            <img src={angleRight} alt="" className="icon" />
          </div>
        </li>
        <li>
          <div className="menu-link flexrow">
            <Link to="/shopping">Shopping</Link>
            <img src={angleRight} alt="" className="icon" />
          </div>
        </li>
        <li>
          <div className="menu-link flexrow">
            <Link to="/wellness">Wellness</Link>
            <img src={angleRight} alt="" className="icon" />
          </div>
        </li>
        <li>
          <div className="menu-link flexrow">
            <Link to="/dining">Dining</Link>
            <img src={angleRight} alt="" className="icon" />
          </div>
        </li>
        <li>
          <div className="menu-link flexrow">
            <Link to="/payment">Payment</Link>
            <img src={angleRight} alt="" className="icon" />
          </div>
        </li>
        <li>
          <div className="menu-link flexrow">
            <Link to="/membership">Membership</Link>

            <img src={angleRight} alt="" className="icon" />
          </div>
        </li>
        <li>
          <div className="menu-link flexrow">
            <Link to="/search">Search</Link>

            <img src={angleRight} alt="" className="icon" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Menu;

import menuIcon from "./images/menu-black.svg";
import notificationBell from "./images/notification-bell.svg";
import userProfile from "./images/user-profile.svg";
import cathayLogo from "./images/cathay-logo.svg";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navigation = () => {
  return (
    <nav className="flexrow">
      <input type="checkbox" id="toggler" />
      <label for="toggler">
        <img src={menuIcon} alt="" className="icon" />
      </label>

      <Menu />

      <div className="navbar flexrow">
        <img src={cathayLogo} alt="" className="logo" />
        <ul className="flexrow">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/flight">Flight</Link>
          </li>
          <li>
            <Link to="/shopping">Shopping</Link>
          </li>
          <li>
            <Link to="/wellness">Wellness</Link>
          </li>
          <li>
            <Link to="/dining">Dining</Link>
          </li>
          <li>
            <Link to="/payment">Payment</Link>
          </li>
          <li>
            <Link to="/membership">Membership</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <img src={notificationBell} alt="" className="icon" />
        <img src={userProfile} alt="" className="icon" />
      </div>
    </nav>
  );
};

export default Navigation;

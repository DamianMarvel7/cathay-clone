import headerLandscape1 from "./images/header-landscape1.jpg";

const Header = () => {
  return (
    <div className="content-header">
      <img src={headerLandscape1} alt="" className="header-img" />
      <div className="header flexcol">
        <h3 className="headerTop-text">Flights</h3>
        <h1 className="headerMiddle-text">Discover Our Top Destination</h1>
        <p className="headerBottom-text">
          Book now and start your next destination
        </p>
        <span className="button-style">Book now</span>
      </div>
    </div>
  );
};

export default Header;

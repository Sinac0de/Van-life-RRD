import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link to="/" className="site-logo">
        #VANLIFE
      </Link>
      <nav>
        <Link to={"/vans"}>Vans</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;

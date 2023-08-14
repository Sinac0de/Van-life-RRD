import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const activeNavStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <Link to="/" className="site-logo">
        #VANLIFE
      </Link>
      <nav>
        {/* isActive checks for any active nav links */}
        <NavLink
          style={({ isActive }) => (isActive ? activeNavStyle : null)}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeNavStyle : null)}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeNavStyle : null)}
          to="/vans"
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

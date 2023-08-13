import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeNavStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activeNavStyle : null)}
          to="/host"
          end
        >
          Dashboard
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeNavStyle : null)}
          to="/host/income"
        >
          Income
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeNavStyle : null)}
          to="/host/vans"
        >
          Vans
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeNavStyle : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;

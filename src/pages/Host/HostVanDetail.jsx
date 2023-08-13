import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

const HostVanDetail = () => {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  const activeNavStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h2>Loading...</h2>;
  }

  return (
    <section>
      {/* setting relative to the path instead of the route */}
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt={`Photo of ${currentVan.name}`} />
          <i className={`van-type van-type-${currentVan.type}`}>
            {currentVan.type}
          </i>
          <h3>{currentVan.name}</h3>
          <h4>${currentVan.price}</h4>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            style={({ isActive }) => (isActive ? activeNavStyle : null)}
            to="."
            end
          >
            info
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeNavStyle : null)}
            to="photos"
          >
            photos
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeNavStyle : null)}
            to="pricing"
          >
            pricing
          </NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
};

export default HostVanDetail;

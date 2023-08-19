import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export const loader = async ({ params }) => {
  await requireAuth();
  return getHostVans(params.id);
};

const HostVanDetail = () => {
  const currentVan = useLoaderData();

  const activeNavStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  //because we are using the loader to get the data, we don't need loading state anymore

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

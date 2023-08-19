import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

export const loader = async () => {
  await requireAuth();
  return getHostVans();
};

const HostVans = () => {
  const vans = useLoaderData();

  const hostVans = vans.map((van) => {
    return (
      <Link to={van.id} key={van.id} className="host-van-link-wrapper">
        <div className="host-van-single">
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        <section>{hostVans}</section>
      </div>
    </section>
  );
};

export default HostVans;

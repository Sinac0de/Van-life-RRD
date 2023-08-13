import { useEffect, useState } from "react";

const HostVans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data));
  }, []);

  console.log(vans);
  return <h2>HostVans is here!</h2>;
};

export default HostVans;

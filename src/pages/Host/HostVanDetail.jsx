import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HostVanDetail = () => {
  const [currentVan, setCurrentVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img
        src={currentVan.imageUrl}
        alt={`Photo of ${currentVan.name}`}
        width={"50px"}
      />
      <p>{currentVan.name}</p>
      <p>${currentVan.price}</p>
    </div>
  );
};

export default HostVanDetail;

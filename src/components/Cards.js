import { cd_url } from "../Utils/Content";

const Card = (resData) => {
  // console.log(resData);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    sla,
    costForTwo,
    avgRating,
  } = resData?.resData?.info || {};

  return (
    <div className="res-card">
      <img src={cd_url + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4 className="text">{cuisines.join(", ")}</h4>
      <h4>{areaName}</h4>
      <span>
        <h4>
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{sla?.lastMileTravelString ?? "2.0 km"}</h4> <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default Card;

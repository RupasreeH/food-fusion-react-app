import { CON_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CON_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(",")}</h4>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      {/* <h4>{resData.info.deliveryTime} minutes</h4> */}
    </div>
  );
};

export default RestaurantCard;

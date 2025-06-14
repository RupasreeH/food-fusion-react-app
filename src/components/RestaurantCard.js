import { useContext } from "react";
import { CON_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="m-4 p-4 w-[240] h-[440] rounded-lg bg-gray-50 hover:bg-gray-200">
      <img
        className="rounded-sm"
        src={CON_URL + resData.card.card.info.cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-2 text-lg">{resData.card.card.info.name}</h3>
      <h4>{resData.card.card.info.cuisines.join(",")}</h4>
      <h4>{resData.card.card.info.avgRating} stars</h4>
      <h4>{resData.card.card.info.costForTwo}</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;

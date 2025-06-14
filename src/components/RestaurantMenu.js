import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCaregory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const resId = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState();
  const dummy = "Dummy Data";
  if (resInfo == null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card.card.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[3]?.card?.card;

  // console.log(
  //   "itemCards",
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[3]?.card?.card
  //     .itemCards
  // );

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("categories", categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h4 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h4>

      {/* <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      {categories.map((category, index) => (
        <RestaurantCaregory
          key={category?.card?.card.categoryId}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;

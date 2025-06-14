import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fectData();
  }, []);

  const fectData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=Meghana%20Foods&trackingId=7d0790a1-6f5c-4054-1aec-644d35ab52e9&submitAction=ENTER&queryUniqueId=6e5bf510-402a-705e-0afb-d5fdd273b187"
    );
    const json = await data.json();
    // console.log(
    //   json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards[0].card.card
    //     .info.id
    // );

    setListOfRestaurants(
      json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards
    );
    setFilterRestaurant(
      json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT.cards
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) return <h1>You are Offline</h1>;

  const { setUserName, loggedInUser } = useContext(UserContext);

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.card.card.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="items-center m-4 p-4 rounded-lg">
          <button
            className="px-4 py-2 m-4 bg-gray-100"
            onClick={() => {
              //Filter logic here
              FilteredList = listOfRestaurants.filter(
                (res) => res.card.card.info.avgRating > 4.4
              );
              setListOfRestaurants(FilteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="search m-4 p-4 items-center">
          <label>User Name:</label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurant/" + restaurant.card.card.info.id}
          >
            {restaurant.card.card.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

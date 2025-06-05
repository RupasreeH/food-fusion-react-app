import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log("Bodey rendered");
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

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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

        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.card.card.info.id}
            to={"/restaurant/" + restaurant.card.card.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

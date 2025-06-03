import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  arr = useState(resList);
  const [listOfRestaurants, setListOfRestaurants] = arr;

  //   let ListOfRestaurants = [
  //     {
  //       info: {
  //         id: "18973",
  //         name: "Nandhana Palace",
  //         city: "1",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
  //         locality: "Koramangala",
  //         areaName: "Koramangala",
  //         costForTwo: "₹500 for two",
  //         cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
  //         avgRating: 4.4,
  //         totalRatingsString: "39K+",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "18974",
  //         name: "Dominos",
  //         city: "1",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
  //         locality: "Koramangala",
  //         areaName: "Koramangala",
  //         costForTwo: "₹500 for two",
  //         cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
  //         avgRating: 3.5,
  //         totalRatingsString: "39K+",
  //       },
  //     },
  //     {
  //       info: {
  //         id: "18975",
  //         name: "Mcd",
  //         city: "1",
  //         cloudinaryImageId:
  //           "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/c16228db-0f86-484e-b3b4-2fb707f22b76_18973.jpg",
  //         locality: "Koramangala",
  //         areaName: "Koramangala",
  //         costForTwo: "₹500 for two",
  //         cuisines: ["Biryani", "Andhra", "South Indian", "North Indian"],
  //         avgRating: 4.8,
  //         totalRatingsString: "39K+",
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            FilteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurants(FilteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

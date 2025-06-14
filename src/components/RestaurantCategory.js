import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCaregory = ({ data, showItems, setShowIndex, dummy }) => {
  // console.log("RestaurantCaregory", data);
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 m-auto my-4 m-full, bg-grey-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};
export default RestaurantCaregory;

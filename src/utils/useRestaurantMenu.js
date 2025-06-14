import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId.resId);
    const json = await data.json();

    setResInfo(json.data);
    console.log("use rest data", json.data);
  };

  return resInfo;
};
export default useRestaurantMenu;

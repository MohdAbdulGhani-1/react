import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);
 
  const fetchData = async () => {
    try {
      const data = await fetch(`https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.374576568417947&lng=78.42981364578007&restaurantId=${resId}`);
      const json = await data.json();
      console.log("Fetched Menu Data: ", json); 
      setMenu(json);
    } catch (error) {
      console.log("Error while fetching the MENU_API:: ", error);
    }
  };

  return menu;
};

export default useRestaurantMenu;
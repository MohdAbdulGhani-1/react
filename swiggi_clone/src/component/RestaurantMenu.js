import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

// api  :-  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3767325&lng=78.4296535&restaurantId=651014&catalog_qa=undefined&submitAction=ENTER
const RestaurantMenu = () => {
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3472352&lng=78.4296535&restaurantId=${useParamsValue.resId}&catalog_qa=undefined&submitAction=ENTER

    const [menu, setMenu] = useState(null);

    const resId = useParams().resId;
    useEffect(() => {
        console.log("fetching data for id: ", resId);
        getRestaurantMenu(resId);
    },[]);

// `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.374576568417947&lng=78.42981364578007&restaurantId=${resId}&submitAction=ENTER`
    async function getRestaurantMenu(resId) {
        try {
            const rowData = await fetch(
                `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.374576568417947&lng=78.42981364578007&restaurantId=${resId}&submitAction=ENTER`,
            );
            // console.log(rowData);
            const data = await rowData.json();
            console.log("fetched menu data",data);
            setMenu(data);
            // const menuData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            // console.log(menuData);
            // console.log(data?.data?.cards[2]?.card?.card?.info);
        } catch (error) {
            console.log("error while fetching data", error);            
        }
    }

    if (!menu) {
        return <h1 style={{margin: "120px"}}>Loading...</h1>;
    }
    const menuItemList = menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    
    
    return (
    <>
        <div style={{margin: "120px"}}>
            <h1>{menu?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <h3>⭐{menu?.data?.cards[2]?.card?.card?.info?.avgRatingString} ({menu?.data?.cards[2]?.card?.card?.info?.totalRatingsString}) . {menu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage} </h3>
            <p>{menu?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
        </div>
        <h1>Menu Items:</h1>
             {
                menuItemList.map((menuItem) => {
                    return <MenuItem key={menuItem.card.info.id} menuItem={menuItem?.card?.info} />
                })
             }
    </>
    );
};

export default RestaurantMenu;
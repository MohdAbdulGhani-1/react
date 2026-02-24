import { useParams } from "react-router-dom";
import { useState } from "react";
import MenuItem from "./MenuItem";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuInfoCard from "./RestaurantMenuInfoCard";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const resId = useParams().resId;
    const menu = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    const dummyData = "props drilling";
    if (!menu) {
            return <h1 style={{margin: "120px"}}>Loading...</h1>;
        }

    const categories =
        menu?.data?.cards[5]?.groupedCard.cardGroupMap?.REGULAR?.cards.filter(
        (category) => {
            return (
            category?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
            );
        },
        ) || [];
    
    // useEffect(() => {
    //     console.log("fetching data for id: ", resId);
    //     getRestaurantMenu(resId);
    // },[]);

// `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.374576568417947&lng=78.42981364578007&restaurantId=${resId}&submitAction=ENTER`
    // async function getRestaurantMenu(resId) {
    //     try {
    //         const rowData = await fetch(
    //             `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.374576568417947&lng=78.42981364578007&restaurantId=${resId}&submitAction=ENTER`,
    //         );
    //         const data = await rowData.json();
    //         console.log("fetched menu data",data);
    //         setMenu(data);
            
    //     } catch (error) {
    //         console.log("error while fetching data", error);            
    //     }
    // }

    
    // const menuItemList = menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    
    
    return (
    // <>
    //     <div style={{margin: "120px"}}>
    //         <h1>{menu?.data?.cards[2]?.card?.card?.info?.name}</h1>
    //         <h3>⭐{menu?.data?.cards[2]?.card?.card?.info?.avgRatingString} ({menu?.data?.cards[2]?.card?.card?.info?.totalRatingsString}) . {menu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage} </h3>
    //         <p>{menu?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
    //     </div>
    //     <h1>Menu Items:</h1>
    //          {
    //             menuItemList.map((menuItem) => {
    //                 return <MenuItem key={menuItem.card.info.id} menuItem={menuItem?.card?.info} />
    //             })
    //          }
    // </>
    <div
      style={{
            paddingLeft: "340px",
            paddingTop: "100px",
            paddingBottom: "50px",
            paddingRight: "340px",
        }}
        >
        <RestaurantMenuInfoCard menu={menu} />
        <h2>Menu:</h2>
        {categories.map((category, index) => (
            <RestaurantCategory
            key={category?.card?.card?.categoryId}
            category={category?.card?.card}
            setIndex={() => {
                setShowIndex(index === showIndex ? null : index);
            }}
            showItems={index === showIndex ? true : false}
            dummyData={dummyData}
            />
        ))}
    </div>
    );
};

export default RestaurantMenu;
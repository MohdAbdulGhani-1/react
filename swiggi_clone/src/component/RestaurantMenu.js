import { useEffect } from "react";
import { useParams } from "react-router-dom";
// api  :-  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3767325&lng=78.4296535&restaurantId=651014&catalog_qa=undefined&submitAction=ENTER
const RestaurantMenu = () => {
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3472352&lng=78.4296535&restaurantId=${useParamsValue.resId}&catalog_qa=undefined&submitAction=ENTER
    useEffect(() => {
        getRestaurantMenu(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3767325&lng=78.4296535&restaurantId=651014&catalog_qa=undefined&submitAction=ENTER`);
    },[])

    async function getRestaurantMenu(url) {
        try {
            const rowData = await fetch(url);
            console.log(rowData);
            const data = await rowData.json();
            console.log(data);
        } catch (error) {
            console.log("error while fetching data", error);            
        }
    }
    const useParamsValue = useParams();
    return (
        <div style={{margin: "120px"}}>
            <h1>Restaurant Menu : {useParamsValue.resId}</h1>
        </div>
    );
};

export default RestaurantMenu;
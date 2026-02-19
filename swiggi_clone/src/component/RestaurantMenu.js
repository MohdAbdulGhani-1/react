import { useEffect } from "react";
import { useParams } from "react-router-dom";
// api  :-  https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3767325&lng=78.4296535&restaurantId=651014&catalog_qa=undefined&submitAction=ENTER
const RestaurantMenu = () => {
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.3472352&lng=78.4296535&restaurantId=${useParamsValue.resId}&catalog_qa=undefined&submitAction=ENTER

    const resId = useParams().resId;
    useEffect(() => {
        console.log("fetching data for id: ", resId);
        getRestaurantMenu(resId);
    },[])


// `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.374576568417947&lng=78.42981364578007&restaurantId=${resId}&submitAction=ENTER`
    async function getRestaurantMenu(resId) {
        try {
            const rowData = await fetch(
                `https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.374576568417947&lng=78.42981364578007&restaurantId=${resId}&submitAction=ENTER`,
                {
                    headers: {
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
                    },
                    method: "GET",
                }
            );
            console.log(rowData);
            const data = await rowData.json();
            console.log("fetched menu data",data);
        } catch (error) {
            console.log("error while fetching data", error);            
        }
    }
    return (
        <div style={{margin: "120px"}}>
            <h1>Restaurant Menu : {resId}</h1>
        </div>
    );
};

export default RestaurantMenu;
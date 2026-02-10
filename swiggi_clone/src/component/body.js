import { useState } from "react";
import { restaurantList } from "../utils/restaurentList";
import RestaurantCard from "./restaurentCart";
function Body(){
    let [hotelList, sethotelList] = useState(restaurantList);
    return (<div id="body">
        <div className="filterBtn">
        <button id="idBtn" onClick={() => {
            let filteredArr = restaurantList.filter((item) => {
                return item.avgRating > 4.5
            });
            sethotelList(filteredArr);
        
        }}>Top Resturents</button>
        </div>
        {
            hotelList.map((item) => (
                <RestaurantCard key={item.id} restaurantList={item} />
            ))
        }
    </div>);
}
export default Body;
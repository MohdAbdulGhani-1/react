import { useEffect, useState } from "react";
import { restaurantList,swiggy } from "../utils/restaurentList";
import RestaurantCard from "./restaurentCart";
import Shimmer from "./shimmer";

function Body(){
    
    let [hotelList, sethotelList] = useState([]);

    useEffect(() => {
        console.log('data called');
        getCatFact("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.3767325&lng=78.4296535&carousel=true&third_party_vendor=1");
    },[])

    async function getCatFact(url) {
        try {
            const rowData = await fetch(url);
            const data = await rowData.json();
            // console.log(data);  

            sethotelList(
                data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
            console.log("data fetched successfull");
        } catch (error) {
            console.log("error while fetching data", error);
            
        }
    
    }

    if(hotelList.length === 0){
        return <div className="card-container">
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
            <Shimmer />
        </div>
    }

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
                <RestaurantCard key={item.info.id} restaurantList={item} />
            ))
        }
    </div>);
}
export default Body;
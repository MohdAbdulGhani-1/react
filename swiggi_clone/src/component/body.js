import { useEffect, useState, useContext } from "react";
import { restaurantList,swiggy } from "../utils/restaurentList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import HotelListContext from "../utils/HotelListContext";
import FilterByRating from "./FilterByRating";
import { json } from "react-router-dom";

function Body(){
    
    const { hotelList, setHotelList, filteredHotelList, setFilteredHotelList } = useContext(HotelListContext);

    const isOnline = useOnlineStatus();


    useEffect(() => {
        console.log('data called');
        getCatFact("https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3615636&lng=78.4746645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    },[])

    async function getCatFact(url) {
        try {
            const rowData = await fetch(url);
            const json = await rowData.json();
            console.log("data fetched", json);

            if (json?.data?.cards.length > 11) {
                setHotelList(
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
                );
                setFilteredHotelList(
                json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
                );
            } else {
                setHotelList(
                json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
                );
                setFilteredHotelList(
                json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
                );
            }
            // sethotelList(
            //     data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            // );
            // console.log("data fetched successfull");
        } catch (error) {
            console.log("error while fetching data", error);
            
        }
    
    }

    if (!isOnline) {
        return (
        <div className="body">
            <h1 style={{ padding: "10vh 1.5rem", textAlign: "center" }}>
            🔴 You are offline. Please check your internet connection.
            </h1>
        </div>
        );
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
        <FilterByRating />
        {/* <div className="filterBtn">
        <button id="idBtn" onClick={() => {
            let filteredArr = restaurantList.filter((item) => {
                return item.avgRating > 4.5
            });
            sethotelList(filteredArr);
        
        }}>Top Resturents</button>
        </div> */}
        {
            filteredHotelList.map((item) => (
                <RestaurantCard key={item.info.id} restaurantList={item} />
            ))
        }
    </div>);
}
export default Body;
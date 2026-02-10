
function RestaurantCard(props){
    return(
        
        <div className="restaurentCard">
            <img src={props.restaurantList.image} alt={props.restaurantList.resName} className="cardImg"/>
            <h2>{props.restaurantList.resName}</h2>
            <h3>{props.restaurantList.avgRating}star. {props.restaurantList.deliveryTime}mins</h3><br/>
            <h4>{props.restaurantList.costForTwo}</h4>
            <p>{props.restaurantList.cuisine.join(", ")}</p>
            <p>{props.restaurantList.location}</p>
        </div>
        
    );
}
export default RestaurantCard;
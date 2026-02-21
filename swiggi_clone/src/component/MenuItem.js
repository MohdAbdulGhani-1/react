const MenuItems = ({menuItem}) => {
    return (
        <div>
            <div>
                <h1>{menuItem?.name}</h1>
                <p>Price: ₹{menuItem?.price ? menuItem?.price / 100 : menuItem?.defaultPrice / 100}</p>
                <p>
                    ⭐{menuItem?.ratings.aggregatedRating.rating} ({menuItem.ratings.aggregatedRating.reatingCount})
                </p>
                <p>{menuItem?.description}</p>
            </div>
            {/* <div>
                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_138/${me}`}
            </div> */}
        </div>
    )
};
export default MenuItems;
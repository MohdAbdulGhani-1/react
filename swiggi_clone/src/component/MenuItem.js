const MenuItems = ({menuItem, dummyData}) => {
    return (
        <div className="menu-item-card">
            <div className="menu-item-content">
                <h3>{menuItem?.name}</h3>
                <div className="menu-item-price">₹{menuItem?.price ? menuItem?.price / 100 : menuItem?.defaultPrice / 100}</div>
                <div className="menu-item-rating">
                    ⭐ {menuItem?.ratings?.aggregatedRating?.rating } ({menuItem?.ratings?.aggregatedRating?.ratingCountV2})
                </div>
                <p className="menu-item-description">{menuItem?.description}</p>
            </div>
            <div>
                <img className="menu-item-image" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_138/${menuItem?.imageId}`} alt={menuItem?.name} />
            </div>
        </div>
    )
};
export default MenuItems;
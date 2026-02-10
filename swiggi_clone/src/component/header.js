function Header(){
    return (<nav id="navbar">
        <a  href="/" id="logo" >Swiggi Clone</a>
        
            <div id="search-container" >
                <input className="nav-items" id="search" type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                <button className="nav-items" id="btn" type="submit">Search</button>
            </div>
            <ul id="nav-list" >
                <li >Home</li>
                <li >Restaurants</li>
                <li >Offers</li>
            </ul>
    </nav>);
}

export default Header;
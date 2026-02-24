import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import HotelListContext from "../utils/HotelListContext";

function Header(){
    const isOnline = useOnlineStatus();
    const [input, setInput] = useState("");
    const {name} = useContext(UserContext);
    const {hotelList, setHotelList, filteredHotelList, setFilteredHotelList} = useContext(HotelListContext);
    
    return (<nav id="navbar">
        <a  href="/" id="logo" >Swiggi Clone</a>
        
            <div id="search-container" >
                <input className="nav-items" id="search" type="text" placeholder="Search for restaurants, cuisines..." value={input} 
                onChange={(e) => { 
                    e.preventDefault(); 
                    setInput(e.target.value); 
                    const filteredList = hotelList.filter((hotel) => 
                    hotel.info.name.toLowerCase().includes(e.target.value.toLowerCase()),
                    );  
                    setFilteredHotelList(filteredList); }}/>
                {/* <button className="nav-items" id="btn" type="submit">Search</button> */}
            </div>
            <ul id="nav-list" >
                {
                    isOnline ? (
                        <li className="navLink" style={{ color: "green" }}>🟢 Online</li>
                    ) : (
                        <li className="navLink" style={{ color: "red" }}>🔴 Offline</li>
                    )
                }
                <li className="navLink" ><Link to="/" className="Link" >Home</Link></li>
                <li className="navLink" ><Link to="/About" className="Link" >About</Link></li>
                <li className="navLink" ><Link to="/Contact" className="Link" >Contact</Link></li>
                <li className="navLink" ><Link to="/Cart" className="Link" >Cart</Link></li>
                <li className="navLink" ><Link to="/grocery" className="Link" >Grocery</Link></li>
                <li className="navLink" >{name}</li>
                <li className="navLink" >{filteredHotelList.length}</li>
            </ul>
    </nav>);
}

export default Header;
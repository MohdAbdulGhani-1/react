import { Link } from "react-router-dom";

function Header(){
    return (<nav id="navbar">
        <a  href="/" id="logo" >Swiggi Clone</a>
        
            <div id="search-container" >
                <input className="nav-items" id="search" type="text" placeholder="Search for restaurant, cuisine or a dish"/>
                <button className="nav-items" id="btn" type="submit">Search</button>
            </div>
            <ul id="nav-list" >
                <li className="navLink" ><Link to="/" className="Link" >Home</Link></li>
                <li className="navLink" ><Link to="/About" className="Link" >About</Link></li>
                <li className="navLink" ><Link to="/Contact" className="Link" >Contact</Link></li>
                <li className="navLink" ><Link to="/Cart" className="Link" >Cart</Link></li>
            </ul>
    </nav>);
}

export default Header;
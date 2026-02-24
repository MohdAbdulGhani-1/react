import Header from "./src/component/header";
import Body from "./src/component/body";
import Footer from "./src/component/footer";
import { Outlet } from "react-router-dom";
import UserContext from "./src/utils/userContext";
import { useEffect, useState } from "react";
import HotelListContext from "./src/utils/HotelListContext";


function AppLayout(){
    const [hotelList, setHotelList] = useState([]);
    const [filteredHotelList, setFilteredHotelList] = useState([]);

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        const randomTrue = Math.random() < 0.5;
        if (!randomTrue) {
        setUsername("guest");
        setEmail("guestEmail.com");
        return;
        }
        const loggedInUser = {
        name: "mohd abdul Ghani",
        email: "abdulghani@gmail.com",
        };
        setUsername(loggedInUser.name);
        setEmail(loggedInUser.email);
    }, []);
    return (
        <div>
            <UserContext.Provider value={{ name: username, email: email }}>
                <HotelListContext.Provider value={{hotelList, setHotelList, filteredHotelList, setFilteredHotelList}}>
                <Header />
                <Outlet />
                <Footer />
                </HotelListContext.Provider>
            </UserContext.Provider>
        </div>
    );
}

export default AppLayout;
import Header from "./src/component/header";
import Body from "./src/component/body";
import Footer from "./src/component/footer";
import { Outlet } from "react-router-dom";

function AppLayout(){
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default AppLayout;
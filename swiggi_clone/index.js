import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/header";
import Body from "./src/component/body";
import Footer from "./src/component/footer";

function App(){
    return (
        <>
            {/* {heading} */}
            <Header />
            <Body />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement("h1",{ id:"heading"}, "Hello world");
root.render(App());
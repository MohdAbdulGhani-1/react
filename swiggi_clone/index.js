import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./AppLayout";
import Header from "./src/component/header";
import Body from "./src/component/body";
import Footer from "./src/component/footer";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Cart from "./src/component/Cart";
import RestaurantMenu from "./src/component/RestaurantMenu";
import ErrorPage from "./src/component/ErrorPage";
import {lazy, Suspense} from "react";

const Grocery = lazy(()=> import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/About",
                element: <About />
            },
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/Cart",
                element: <Cart />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1 style={{padding: "200px"}}>Loading...</h1>}><Grocery /></Suspense>
            }
        ],
        errorElement: <ErrorPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
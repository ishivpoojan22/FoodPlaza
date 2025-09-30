import { lazy, Suspense, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import Grocery from "./components/Grocery.js";
import Shimmer from "./components/Shimmer.js";
import userContext from "./utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";

/*
 Header
   -logo
    nav-item

Body
  -search
  -restaurant
    -card
    -image
    -name
    -type
    -rating
    -time

Footer
 - copyright
 - links
*/

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const Applayout = () => {
  const [userName, setUserName] = useState();

  // authentication

  useEffect(() => {
    // make an api call to send an username and password

    const data = {
      name: "Shiv Poojan",
    };

    setUserName(data.name);
  }, []);

  return (

    <Provider store={appStore}>
      <userContext.Provider value={{loggedInUser:userName , setUserName}}>
      <div className="font-sans">
        <Header />
        {/* <Body /> */}
        <Outlet />
      </div>
    </userContext.Provider>
    </Provider>
    
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

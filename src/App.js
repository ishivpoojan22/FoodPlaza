import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

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

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

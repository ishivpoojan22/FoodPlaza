import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Header = () => {
  // let btnName = "Log in";
  
  let [btnName, setbtnName] = useState("Log in");

  const onlineStatus = useOnlineStatus();

  const data = useContext(userContext);

  return (
    <div className="header">
      <div className="flex justify-between drop-shadow-amber-100 bg-yellow-100 shadow-md">
        <div className="">
          <Link to="/">
            <img className="w-30" src={LOGO_URL}></img>
          </Link>
        </div>
        <div className="flex justify-evenly">
          <ul className="flex m-4 p-4 justify-evenly">
            <li className="m-4 font-bold">
              Online Status: {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="m-4 border rounded-lg px-2 bg-green-200 transition-transform duration-200 transform hover:scale-105 shadow">
              {/* <a href="/">Home</a> */}
              <Link to="/">Home</Link>
            </li>
            <li className="m-4 border rounded-lg px-2 bg-green-200 transition-transform duration-200 transform hover:scale-105 shadow">
              <Link to="/about">About Us</Link>
            </li>
            <li className="m-4 border rounded-lg px-2 bg-green-200 transition-transform duration-200 transform hover:scale-105 shadow">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="m-4 border rounded-lg px-2 bg-green-200 transition-transform duration-200 transform hover:scale-105 shadow">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="m-4">Cart</li>
            <button
              className="m-4 cursor-pointer border rounded-xl px-6 bg-green-200 transition-transform duration-200 transform hover:scale-105 shadow"
              onClick={() => {
                btnName === "Log in"
                  ? setbtnName("Log out")
                  : setbtnName("Log in");
              }}
            >
              {btnName}
            </button>
            <li className="m-4 font-bold">{data.loggedInUser}</li>
          </ul>

 
        </div>
      </div>
    </div>
  );
};

export default Header;

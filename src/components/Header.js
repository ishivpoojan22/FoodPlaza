import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName = "Log in";
  let [btnName, setbtnName] = useState("Log in");

  const onlineStatus = useOnlineStatus()

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="nav-list">
        <ul>
          <li>Online Status: {onlineStatus ?  "✅" : "🔴"}</li>
          <li>
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
           <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="login"
          onClick={() => {
            btnName === "Log in" ? setbtnName("Log out") : setbtnName("Log in");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;

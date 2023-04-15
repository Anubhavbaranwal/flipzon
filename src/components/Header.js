// import logo from "../../assets/logo.png";
import { logo } from "../constants";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export const NavComponent = (user) => {
  const [isLoggedIn, setIsLoggedIn] = useState(user.authenticated || false);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const totalItemsCount = useSelector((store) => store.cart.totalItemsCount);
  return (
    <div className="flex justify-between shadow-lg mb-2 ">
      <div className="w-24">
        <img src={logo} alt="Logo" />
      </div>
      <div className="rightside">
        <ul className="flex py-5">
          <li className="px-2  hover:bg-red-500 rounded">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2  hover:bg-red-500 rounded max-md:hidden">
            <Link to="/Aboutus">About</Link>
          </li>
          <li className="px-2  hover:bg-red-500 rounded">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-2  hover:bg-red-500 rounded">
            <Link to="/cart">Cart({totalItemsCount})</Link>
          </li>{" "}
          {isAuthenticated ? (
            <li>
              <button
                className="px-2  hover:bg-red-500 rounded"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button
                className="px-2  hover:bg-red-500 rounded"
                onClick={() => {
                  loginWithRedirect();
                }}
              >
                Login
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export const Header = (state) => {
  return (
    <div className="header">
      <NavComponent {...state} />
    </div>
  );
};

export default Header;

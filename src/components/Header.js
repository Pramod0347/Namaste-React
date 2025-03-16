import { useState } from "react";
import Logo from "../assets/img/images.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a className="w-24 " href="/">
    <img className="logo" alt="logo" src={Logo}></img>
  </a>
);

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const isOnline = useOnline();

  return (
    <div className="header flex justify-between items-center px-4 border-b-2 border-gray-200 bg-pink-50 shadow-md">
      <Title />
      <div className="nav-items">
        <ul className="flex space-x-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <h1>{isOnline ? "✅" : "🔴"}</h1>
      {loggedInUser ? (
        <button
          onClick={() => {
            setLoggedInUser(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setLoggedInUser(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;

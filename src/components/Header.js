import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { Cart } from "../Context";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div>
      <span className="header">REACT CONTEXT LEARNING</span>
      <ul className="nav">
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

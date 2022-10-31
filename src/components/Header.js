import React from "react";
import { BsSearch, BsFillCartFill, BsTranslate } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      {/* <h1>Plant and Care Shop</h1> */}

      <nav className="navbar">
        <div class="logo">Plant and Care Shop</div>
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/shop" >
              Shop
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/plant-care">
              Plant Care
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/services">
              Services
            </Link>
          </li>
          <li>
            <button className="login">
              <Link
                style={{ textDecoration: "none", color: "#ffffff" }}
                to="/login"
              >
                Login
              </Link>
            </button>
            <button className="navigation">
              <BsSearch />
            </button>
            <button className="navigation">
              <BsFillCartFill />
            </button>
            <button className="navigation">
              <BsTranslate />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;

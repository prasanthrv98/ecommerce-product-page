import React, { useState } from "react";

import logo from "../../assets/logo.svg";
import profileImg from "../../assets/image-avatar.png";
import classes from "./Header.module.css";

import HeaderCartButton from "./HeaderCartButton";
import Cart from "../Cart/Cart";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";

const Header = (props) => {
  const { showCart, triggerRef, nodeRef } = useDetectOutsideClick(false);

  return (
    <header className={classes.header}>
      <nav className={classes["main-nav"]}>
        <div className={classes["logo-box"]}>
          <img src={logo} alt="" />
        </div>
        <div className={classes["nav-list"]}>
          <a href="#" className={classes["nav-link"]}>
            Collections
          </a>
          <a href="#" className={classes["nav-link"]}>
            Men
          </a>
          <a href="#" className={classes["nav-link"]}>
            Women
          </a>
          <a href="#" className={classes["nav-link"]}>
            About
          </a>
          <a href="#" className={classes["nav-link"]}>
            Contact
          </a>
        </div>
      </nav>

      <HeaderCartButton ref={triggerRef} />

      <div className={classes["profile-box"]}>
        <img src={profileImg} alt="" />
      </div>
      <hr className={classes["header-rule"]} />
      {showCart && <Cart ref={nodeRef} />}
    </header>
  );
};

export default Header;

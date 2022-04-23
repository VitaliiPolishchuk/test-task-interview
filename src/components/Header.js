import React from "react";
import Button from "./Button";
import logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="buttons">
        <Button>Users</Button>
        <Button>Sign up</Button>
      </div>
    </header>
  );
};

export default Header;

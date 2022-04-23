import React, { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AddUser from "../sections/AddUser";
import Users from "../sections/Users";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Header />
      <Hero />
      <Users />
      <AddUser />
    </div>
  );
};

export default HomePage;

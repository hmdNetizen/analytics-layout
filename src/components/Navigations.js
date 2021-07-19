import React from "react";
import "./Navigations.css";
import { GiDividedSquare } from "react-icons/gi";

const Navigations = () => {
  return (
    <header className="header">
      <div className="brand">
        <div className="logo-wrapper">
          <GiDividedSquare size={30} />
        </div>
        <h1 className="brand-name">Tumbas</h1>
      </div>
    </header>
  );
};

export default Navigations;

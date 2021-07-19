import React from "react";
import "./MainContents.css";
import Navigations from "./Navigations";

const MainContents = () => {
  return (
    <main className="main">
      <aside className="aside">
        <Navigations />
      </aside>
      <section className="mid-content"></section>
      <section className="side-content"></section>
    </main>
  );
};

export default MainContents;

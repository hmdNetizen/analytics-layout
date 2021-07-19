import React from "react";
import "./MainContents.css";
import Navigations from "./Navigations";
import MiddleContents from "./MiddleContents";

const MainContents = () => {
  return (
    <main className="main">
      <aside className="aside">
        <Navigations />
      </aside>
      <section className="mid-contents">
        <MiddleContents />
      </section>
      <section className="side-contents"></section>
    </main>
  );
};

export default MainContents;

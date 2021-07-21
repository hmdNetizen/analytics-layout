import React from "react";
import "./MainContents.css";
import Navigations from "./Navigations";
import MiddleContents from "./MiddleContents";
import RightContents from "./layouts/right-section/RightContents";

const MainContents = () => {
  return (
    <main className="main">
      <aside className="aside">
        <Navigations />
      </aside>
      <section className="mid-contents">
        <MiddleContents />
      </section>
      <section className="right-contents">
        <RightContents />
      </section>
    </main>
  );
};

export default MainContents;

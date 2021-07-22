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
        <div className="copyright">
          <h4 className="title">&copy; Tumbas 2020</h4>
          <p>
            Platform for solution of all types business to be more advanced.
          </p>
        </div>
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

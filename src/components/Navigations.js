import React, { useState } from "react";
import "./Navigations.css";
import { GiDividedSquare } from "react-icons/gi";
import { RiLayoutGridFill, RiLockFill, RiSettings4Fill } from "react-icons/ri";
import { IoDocumentText, IoPeople } from "react-icons/io5";
import { HiPaperAirplane } from "react-icons/hi";

const Navigations = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  return (
    <header className="header">
      <div className="brand">
        <div className="logo-wrapper">
          <GiDividedSquare size={30} color="#fff" />
        </div>
        <h1 className="brand-name">Tumbas</h1>
      </div>
      <div className="menu">
        <h2 className="title">Menu</h2>
        <ul className="list">
          {menuTabs.map((tab) => (
            <li
              key={tab.id}
              className={`listItem ${
                selectedMenu === tab.id ? "listItem-active" : "listItem"
              }`}
              onClick={() => setSelectedMenu(tab.id)}
            >
              {React.createElement(tab.icon, {
                size: 15,
                className: "listItem-icon",
              })}
              <span classname="listItem-text">{tab.title}</span>
            </li>
          ))}
        </ul>
        <h2 className="title" style={{ marginTop: "2em" }}>
          Business
        </h2>
        <ul className="list">
          {businessTabs.map((tab) => (
            <li
              key={tab.id}
              className={`listItem ${
                selectedMenu === tab.id ? "listItem-active" : "listItem"
              }`}
              onClick={() => setSelectedMenu(tab.id)}
            >
              {React.createElement(tab.icon, {
                size: 15,
                className: "listItem-icon",
              })}
              <span classname="listItem-text">{tab.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

const menuTabs = [
  {
    id: 0,
    title: "Overview",
    icon: RiLayoutGridFill,
  },
  {
    id: 1,
    title: "Orders",
    icon: IoDocumentText,
  },
  {
    id: 2,
    title: "Products",
    icon: RiLockFill,
  },
  {
    id: 3,
    title: "Settings",
    icon: RiSettings4Fill,
  },
];

const businessTabs = [
  {
    id: 4,
    title: "Shipment",
    icon: HiPaperAirplane,
  },
  {
    id: 5,
    title: "Employee",
    icon: IoPeople,
  },
];

export default Navigations;

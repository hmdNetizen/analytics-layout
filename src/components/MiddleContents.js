import React, { Fragment } from "react";
import { FiSearch } from "react-icons/fi";
import { RiLockFill } from "react-icons/ri";
import { IoPeople, IoCart } from "react-icons/io5";
import { AiFillPieChart } from "react-icons/ai";
import "./MiddleContents.css";
import Chart from "./Chart";

const MiddleContents = () => {
  return (
    <Fragment>
      <form className="form">
        <label htmlFor="form-input" className="sr-only">
          Search for Product
        </label>
        <input
          type="text"
          id="form-input"
          className="form-input"
          placeholder="Search for product"
        />
        <FiSearch size={25} className="input-icon" />
      </form>
      <h2 className="title">Overview</h2>
      <div className="overview">
        <ul className="list">
          {overviewData.map((data) => (
            <li key={data.id} className="listItem">
              <div className="listItem-info">
                {React.createElement(data.icon, {
                  size: 20,
                  className: "listItem-info-icon",
                  color: data.iconColor,
                })}
                <span
                  classname="listItem-info-text"
                  style={{ color: data.textColor }}
                >
                  {data.margin}
                </span>
              </div>
              <h2 className="title">{data.amount}</h2>
              <p className="listItem-description">{data.title}</p>
            </li>
          ))}
        </ul>
        <Fragment>
          <Chart />
        </Fragment>
      </div>
    </Fragment>
  );
};

const overviewData = [
  {
    id: 0,
    title: "Total Sales",
    margin: "+24%",
    icon: RiLockFill,
    amount: "$27,340.00",
    textColor: "#29b070",
    iconColor: "#ee7c3d",
  },
  {
    id: 1,
    title: "Total Expenses",
    textColor: "#f54345",
    margin: "-32%",
    icon: AiFillPieChart,
    amount: "$27,340.00",
    iconColor: "#9a54e1",
  },
  {
    id: 2,
    title: "Total Visitors",
    margin: "+48%",
    icon: IoPeople,
    amount: "18,260.00",
    textColor: "#29b070",
    iconColor: "#29b070",
  },
  {
    id: 3,
    title: "Total Orders",
    margin: "-12%",
    icon: IoCart,
    amount: "11,340.00",
    textColor: "#f54345",
    iconColor: "#f54345",
  },
];

export default MiddleContents;

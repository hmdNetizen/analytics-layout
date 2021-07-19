import { Fragment } from "react";
import { FiSearch } from "react-icons/fi";
import "./MiddleContents.css";

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
    </Fragment>
  );
};

const overviewData = [
  {
    id: 0,
    title: "Total Sales",
    margin: "+24%",
    icon: "",
    amount: "$27,340.00",
  },
];

export default MiddleContents;

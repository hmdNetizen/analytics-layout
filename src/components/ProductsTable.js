import React from "react";
import "./ProductsTable.css";
import headphone from "../assets/headphone.png";
import smartphone from "../assets/smartphone.png";

const ProductsTable = () => {
  return (
    <table className="table" cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th>Photos</th>
          <th>Name</th>
          <th>Date</th>
          <th>Category</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((data) => (
          <tr key={data.id}>
            <td>
              <img src={data.photo} alt={data.alt} />
            </td>
            <td>
              {data.name} <span>{data.hash}</span>
            </td>
            <td>{data.date}</td>
            <td>{data.category}</td>
            <td>{data.brand}</td>
            <td style={{ color: "#66af97" }}>${data.price}</td>
            <td>
              {data.availability} <span>{data.viewers}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const tableData = [
  {
    id: 0,
    photo: headphone,
    alt: "headphone",
    name: "Cowboy Hat",
    hash: "#287393720",
    date: "August 12, 2020",
    category: "Fashion",
    brand: "Swallow",
    price: 99.89,
    availability: "Available",
    viewers: "18k viewers",
  },
  {
    id: 1,
    photo: smartphone,
    name: "Smartphone",
    alt: "smartphone",
    hash: "#345678901",
    date: "August 12, 2020",
    category: "Gadget",
    brand: "Mito",
    availability: "Available",
    price: 99.89,
    viewers: "18k viewers",
  },
];

export default ProductsTable;

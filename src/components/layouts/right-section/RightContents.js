import { Fragment } from "react";
import { HiBell } from "react-icons/hi";
import { FaPencilAlt } from "react-icons/fa";
import { BiShapePolygon, BiCalendarStar } from "react-icons/bi";
import { RiLockFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import smartphone from "../../../assets/smartphone.png";
import headphone from "../../../assets/headphone.png";
import camera from "../../../assets/camera.png";

import "./RightContents.css";

const RightContents = () => {
  return (
    <Fragment>
      <div className="top-icons">
        <div className="icon-wrapper bell">
          <HiBell size={18} color="#2d4070" />
        </div>
        <div className="icon-wrapper pencil">
          <FaPencilAlt size={15} color="#2d4070" />
        </div>
      </div>
      <div className="circle-wrapper">
        <div className="circle">
          <BiShapePolygon size={70} color="#fff" />
        </div>
      </div>
      {/* PRODUCTION DESCRIPTION */}
      <h2 className="title">Konter Pulsa</h2>
      <div className="description-section">
        <div className="details-section product">
          <div className="icon-parent">
            <RiLockFill size={20} />
          </div>
          <div className="product-sum">
            <h3>218</h3>
            <p>Products</p>
          </div>
        </div>
        <div className="divider" />
        <div className="details-section followers">
          <div className="icon-parent">
            <IoPeople size={20} />
          </div>
          <div className="product-sum">
            <h3>2.580</h3>
            <p>Followers</p>
          </div>
        </div>
      </div>
      {/* REPUTATION */}
      <div className="reputation">
        <h3 className="title">Reputation</h3>
        <div className="reputation-section">
          <div className="reputation-icon">
            <BiCalendarStar size={20} color="#ff8845" />
          </div>
          <div className="reputation-progress">
            <div className="progress-contents">
              <h4>Star seller</h4>
              <p>85%</p>
            </div>
            <div className="progress-bar">
              <div className="progress" />
            </div>
          </div>
        </div>
      </div>
      {/* RECENT ORDERS */}
      <div className="orders">
        <div className="orders-descriptions">
          <h3 className="title">Recent Orders</h3>
          <h4>See All</h4>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-wrapper" key={product.id}>
              <img src={product.photo} alt={product.name} />
              <div className="product-name-wrapper">
                <h4>{product.name}</h4>
                <p>2 minutes ago</p>
              </div>
              <h5>{product.price}</h5>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

const products = [
  { id: 0, photo: headphone, name: "Redmi 4X", price: "+$80.00" },
  { id: 1, photo: smartphone, name: "Acer E1-421", price: "+$80.00" },
  { id: 2, photo: camera, name: "Nikon D3500", price: "+$80.00" },
];

export default RightContents;

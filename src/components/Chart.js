import React from "react";
import "./Chart.css";

const Chart = () => {
  return (
    <div className="chart">
      <div className="chart-heading">
        <div className="income">
          <h3>Income</h3>
        </div>
        <h3>Expense</h3>
        <select>
          <option value="2020">2020</option>
          <option value="2020">2019</option>
          <option value="2020">2018</option>
          <option value="2020">2017</option>
        </select>
      </div>
      <div className="figures">
        <div className="values">
          {figures.map((figure, index) => (
            <p key={index}>{figure}</p>
          ))}
        </div>
        <div className="graph">
          {months.map((month) => (
            <div className="graph-content" key={month.id}>
              <div
                className="bars"
                style={{
                  background: month.barColor,
                  height: month.figure + "%",
                }}
              ></div>
              <p
                className="months"
                style={{ color: month.id !== 4 ? "#98a5c3" : "#485a83" }}
              >
                {month.name}
              </p>
            </div>
          ))}
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
          <div className="chat-icon">
            <p>12 May</p>
            <h4>$7000</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

const figures = ["10k", "6k", "2k", 0, ""];
const months = [
  { id: 0, name: "Jan", barColor: "#97c1fe", figure: 40 },
  { id: 1, name: "Feb", barColor: "#97c1fe", figure: 75 },
  { id: 2, name: "Mar", barColor: "#97c1fe", figure: 60 },
  { id: 3, name: "Apr", barColor: "#97c1fe", figure: 20 },
  { id: 4, name: "May", barColor: "#347ae2", figure: 100 },
  { id: 5, name: "Jun", barColor: "#e2e8fd", figure: 60 },
  { id: 6, name: "Jul", barColor: "#e2e8fd", figure: 40 },
  { id: 7, name: "Aug", barColor: "#e2e8fd", figure: 60 },
  { id: 8, name: "Sep", barColor: "#e2e8fd", figure: 40 },
  { id: 9, name: "Oct", barColor: "#e2e8fd", figure: 60 },
  { id: 10, name: "Nov", barColor: "#e2e8fd", figure: 40 },
  { id: 11, name: "Dec", barColor: "#e2e8fd", figure: 75 },
];

export default Chart;

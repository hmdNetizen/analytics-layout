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
        </select>
      </div>
      <div className="figures">
        <div className="values">
          {figures.map((figure) => (
            <p key={figure}>{figure + "k"}</p>
          ))}
        </div>
        <h2>Graph</h2>
      </div>
    </div>
  );
};

const figures = [10, 6, 2, 0];

export default Chart;

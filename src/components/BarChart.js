import React, { Component } from "react";
import Plot from "react-plotly.js";
import data from "./bardata.json";

class BarChart extends Component {
  render() {
    return (
      <div>
        <Plot
          data={[{ type: "bar", x: ["one", "two", "three"], y: [29, 150, 85] }]}
          layout={{ width: 500, height: 500, title: "a simple bar chart" }}
        />
      </div>
    );
  }
}

export default BarChart;

/**
 *
 * create by szfeng
 *
 * @flow
 */
import React, { Component } from "react";
import G2 from "@antv/g2";

const searchusersData = [
  { time: "2019-10-15", count: 2 },
  { time: "2019-10-16", count: 4 },
  { time: "2019-10-17", count: 6 },
  { time: "2019-10-18", count: 4 },
  { time: "2019-10-19", count: 5 },
  { time: "2019-10-20", count: 4 },
  { time: "2019-10-21", count: 6 },
  { time: "2019-10-22", count: 8 },
  { time: "2019-10-23", count: 4 },
  { time: "2019-10-24", count: 7 },
  { time: "2019-10-25", count: 8 },
  { time: "2019-10-26", count: 4 },
  { time: "2019-10-27", count: 6 },
  { time: "2019-10-28", count: 4 },
  { time: "2019-10-29", count: 3 },
  { time: "2019-10-30", count: 2 }
];

export default class Demo extends Component<any> {
  render() {
    return <div id="searchusers"></div>;
  }

  componentDidMount() {
    const searchusersChart = new G2.Chart({
      id: "searchusers",
      forceFit: true,
      height: 40,
      padding: 0
    });

    searchusersChart.source(searchusersData, {});
    searchusersChart.scale("time", {
      range: [0, 1]
    });
    searchusersChart.scale("count", {
      range: [0, 1],
      min: 0,
      max: 10
    });
    searchusersChart.axis(false);
    searchusersChart
      .line()
      .position("time*count")
      .size(4)
      .shape("smooth");
    searchusersChart
      .area()
      .position("time*count")
      .color("#B8DDF4")
      .opacity(1)
      .shape("smooth");
    searchusersChart.render();
  }
}
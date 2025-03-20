"use client"
import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 2400,
  },
  {
    name: "Feb",
    income: 1398,
  },
  {
    name: "March",
    income: 9800,
  },
  {
    name: "April",
    income: 3908,
  },
  {
    name: "May",
    income: 4800,
  },
  {
    name: "June",
    income: 3800,
  },
  {
    name: "July",
    income: 3300,
  },
  {
    name: "Aug",
    income: 5300,
  },
  {
    name: "Sept",
    income: 4800,
  },
  {
    name: "Oct",
    income: 5000,
  },
  {
    name: "Nov",
    income: 3000,
  },
  {
    name: "Dec",
    income: 3750,
  },

];

function LineCharts({ lineColor }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Legend verticalAlign="top"/>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="income"
          stroke={lineColor}
          strokeWidth={2}
          activeDot={{ r: 10 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineCharts;

"use client";
import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Food", value: 400 },
  { name: "invoices", value: 300 },
  { name: "Entertainment", value: 300 },
];
const data02 = [
  { name: "Salary", value: 100 },
  { name: "rental income", value: 300 },
  { name: "investments", value: 100 },
];

export default function CustomPieChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={300} height={300}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#011936"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82181a"
          label
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

"use client";

import React from "react";
import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", visitors: 1200, sales: 450 },
  { name: "Feb", visitors: 1800, sales: 600 },
  { name: "Mar", visitors: 1500, sales: 550 },
  { name: "Apr", visitors: 2000, sales: 700 },
  { name: "May", visitors: 1700, sales: 650 },
  { name: "Jun", visitors: 2200, sales: 900 },
];

const Performance = () => {
  return (
    <div className="backdrop-blur-xl select-none dark:bg-black/20 rounded-2xl p-6 shadow-xl border border-gray-400/20 dark:border-white/10">
      <h3 className="text-xl font-bold mb-4 text-gray-100 dark:text-white">
        Performance Overview
      </h3>

      <div  className="w-full h-64">
        <ResponsiveContainer>
          <BarChart  data={data}>
            <defs>

              <linearGradient id="visitorsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4ade80" stopOpacity={1} />
                <stop offset="100%" stopColor="#4ade80" stopOpacity={0.3} />
              </linearGradient>

   
              <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity={1} />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#5555" />

            <XAxis
              dataKey="name"
              tick={{ fill: "#ddd" }}
              axisLine={{ stroke: "#666" }}
            />

            <YAxis
              tick={{ fill: "#ddd" }}
              axisLine={{ stroke: "#666" }}
            />


            <Tooltip
              contentStyle={{
                background: "#1f2937", 
                border: "none",
                borderRadius: "8px",
                padding: "10px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
            />

            <Legend wrapperStyle={{ color: "#fff" }} />


            <Bar
            className="select-none"
              dataKey="visitors"
              fill="url(#visitorsGradient)"
              radius={[8, 8, 0, 0]}
            />

            <Bar
              dataKey="sales"
              fill="url(#salesGradient)"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Performance;

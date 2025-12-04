
import Performance from "@/Components/admin/Performance";
import Totalorders from "@/Components/admin/Totalorders";
import React from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 p-4 gap-6">
      <Totalorders />
      <Performance />
      <div className="md:col-span-1">

      </div>
    </div>
  );
};

export default Dashboard;

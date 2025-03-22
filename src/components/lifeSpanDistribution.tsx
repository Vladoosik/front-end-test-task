import React, { memo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { LifeSpanData } from "../../types/dataItem.ts";

const LifeSpanDistribution = ({
  lifeSpanData,
}: {
  lifeSpanData: LifeSpanData[];
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Life Span Distribution</h2>
      <div className="h-[300px]">
        <ResponsiveContainer>
          <LineChart data={lifeSpanData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="years" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(LifeSpanDistribution);

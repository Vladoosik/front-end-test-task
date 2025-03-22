import { memo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DataItem } from "../../types/dataItem.ts";

const AdaptabilityChart = ({
  adaptabilityData,
}: {
  adaptabilityData: DataItem[];
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Adaptability Distribution</h2>
      <div className="h-[300px]">
        <ResponsiveContainer>
          <BarChart data={adaptabilityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#0088FE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default memo(AdaptabilityChart);

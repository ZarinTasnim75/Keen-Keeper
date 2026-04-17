import React, { useContext, useMemo } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { FriendContext } from "../../components/Context/FriendContext";

const COLORS = ["#7C3AED", "#2D4A3E", "#4CAF7D"];

const Stats = () => {
  const { timeline } = useContext(FriendContext);

  const data = useMemo(() => {
    const counts = { Text: 0, Call: 0, Video: 0 };
    timeline.forEach(({ type }) => {
      const key = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
      if (key in counts) counts[key]++;
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  }, [timeline]);

  return (
    <div className="bg-base-200 p-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Friendship Analytics</h2>
      <div className="bg-white p-10 rounded-xl">
        <p className="text-sm text-gray-600 mb-6">By Interaction Type</p>
        <div className="w-full h-72">
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={3} dataKey="value">
                {data.map((_, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;
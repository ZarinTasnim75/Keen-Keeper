import React from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Text", value: 45 },
    { name: "Call", value: 30 },
    { name: "Video", value: 25 },
];

const COLORS = ["#7C3AED", "#2F855A", "#38A169"];

const Stats = () => {
    return (
        <div className="bg-base-200 p-6">

            <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Friendship Analytics
            </h2>
            <div className="bg-white p-10 rounded-xl">
                <p className="text-sm text-gray-600 mb-6">
                    By Interaction Type
                </p>

                <div className="w-full h-72">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={90}
                                paddingAngle={3}
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
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
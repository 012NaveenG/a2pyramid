import { PieChart, Pie, Cell } from 'recharts';
import { Card } from 'flowbite-react';

const data = [
    { name: 'Male', value: 400 },
    { name: 'Female', value: 300 },
];

const COLORS = ['#0088FE', '#FFBB28'];

const PieChartComponent = () => {

    const onPieEnter = (_, index) => {
        console.log("Hovered on Slice:", data[index]);
    };

    return (
        <>

            <PieChart width={300} height={250} className="focus:outline-none focus:ring-0">
                <Pie
                    data={data}
                    cx={180}
                    cy={90}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    className="focus:outline-none focus:ring-0"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

            </PieChart>
            {/* Vertical Legend */}
            <div className="flex flex-row gap-2 items-center justify-center">
                {data.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <span className="text-sm font-semibold dark:text-white">{entry.name}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PieChartComponent;

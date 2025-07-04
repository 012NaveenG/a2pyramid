import { PieChart, Pie,  Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Present', value: 80 },
    { name: 'Absent', value: 20 },
];

const COLORS = ['#00C49F', '#FF8042'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
            fontSize="12"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const AttendanceChart = () => {
    return (
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto">
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius="80%"
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AttendanceChart;

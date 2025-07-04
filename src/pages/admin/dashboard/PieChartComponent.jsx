import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

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
    <div className="flex flex-col items-center justify-center w-full h-full">
      
      {/* Responsive PieChart */}
      <div className="w-40 h-40 sm:w-56 sm:h-56">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius="40%"
              outerRadius="60%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              onMouseEnter={onPieEnter}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="text-sm sm:text-base font-semibold dark:text-white">{entry.name}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PieChartComponent;

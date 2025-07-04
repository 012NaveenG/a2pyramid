import { Card } from "flowbite-react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import PieChart from "./PieChartComponent.jsx";
import Timeline from "../../../components/Timeline.jsx";
import TeacherList from "./TeacherList.jsx";
import AddTimelineModal from "../../../components/AddTimelineModal.jsx";
import { useState } from "react";

const gridCards = [
  { title: "New Students", value: 10, image: "new_students.png", symbol: "" },
  { title: "Total Courses", value: 25, image: "total_courses.png", symbol: "" },
  { title: "Total Teachers", value: 50, image: "total_teachers.png", symbol: "" },
  { title: "Fees Collection", value: 12000, image: "fee_collection.png", symbol: <FaIndianRupeeSign /> },
];

const Dashboard = () => {
  const [timelines, setTimelines] = useState([
    { title: "Science Fair", date: new Date(2025, 6, 4), time: "10:30 - 12:30" },
  ]);

  const handleNewTimeline = (data) => {
    if (!data.title || !data.date || !data.time) return;
    const newTimeline = { id: Date.now(), title: data.title, time: data.time, date: data.date };
    setTimelines([newTimeline, ...timelines]);
  };

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-10 mt-16 max-w-7xl mx-auto">
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {gridCards.map((item, idx) => (
          <Card key={idx} className="w-full">
            <div className="flex items-center justify-between">
              <img src={item.image} alt={item.title} className="w-14 h-14 object-contain" />
              <div className="text-right">
                <h1 className="font-medium text-base sm:text-lg dark:text-slate-300">{item.title}</h1>
                <h1 className="text-green-500 font-bold text-xl sm:text-2xl flex items-center justify-end">
                  {item.symbol} {item.value}
                </h1>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Three Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="bg-white dark:bg-black/20 border border-slate-700 shadow rounded-lg p-4">
          <h1 className="font-semibold text-lg dark:text-white mb-2">Students</h1>
          <div className="h-64 sm:h-80 overflow-y-auto">
            <PieChart />
          </div>
        </div>

        <div className="bg-white dark:bg-black/20 border border-slate-700 shadow rounded-lg p-4">
          <h1 className="font-semibold text-lg dark:text-white mb-2">Teacher List</h1>
          <div className="h-64 sm:h-80 overflow-y-auto">
            <TeacherList />
          </div>
        </div>

        <div className="bg-white dark:bg-black/20 border border-slate-700 shadow rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-lg font-semibold dark:text-white">Timeline</h1>
            <AddTimelineModal handleNewTimeline={handleNewTimeline} />
          </div>
          <div className="h-64 sm:h-80 overflow-y-auto">
            <Timeline data={timelines} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;

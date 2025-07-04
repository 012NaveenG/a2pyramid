import { Card } from "flowbite-react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import PieChart from "./PieChartComponent.jsx";
import Timeline from "../../../components/Timeline.jsx";
import TeacherList from "./TeacherList.jsx";
import AddTimelineModal from "../../../components/AddTimelineModal.jsx";
import { useState } from "react";

const gridCards = [
  {
    title: "New Students",
    value: 10,
    image: "new_students.png",
    symbol: ""
  },
  {
    title: "Total Courses",
    value: 25,
    image: "total_courses.png",
    symbol: ""
  },
  {
    title: "Total Teachers",
    value: 50,
    image: "total_teachers.png",
    symbol: ""
  },
  {
    title: "Fees Collection",
    value: 12000,
    image: "fee_collection.png",
    symbol: <FaIndianRupeeSign />
  },

]
const Dashboard = () => {


  const [timelines, setTimelines] = useState([{
    title: "Science Fair",
    date: new Date(2025, 6, 4), 
    time: "10:30 - 12:30"
  },])
  const handleNewTimeline = (data) => {
    try {
      if (!data.title || !data.date || !data.time) return;
      const newTimeline = {
        id: Date.now(),
        title: data.title,
        time: data.time,
        date: data.date
      };
      setTimelines([newTimeline, ...timelines]);
    } catch (error) {

    }
  }


  return (
    <div className="py-10 mt-10">
      <div className="grid grid-cols-4 gap-2">

        {gridCards.map((item, idx) => (
          <Card className="max-w-sm" key={idx}>
            <div className="flex  justify-between">
              <img src={item.image} alt={item.title} />
              <div>
                <h1 className="font-semibold text-lg dark:text-slate-300">{item.title}</h1>
                <h1 className="text-green-500 font-bold text-2xl float-end flex items-center ">{item.symbol} {item.value}</h1>
              </div>
            </div>
          </Card>
        ))}

      </div>

      <div className="grid grid-cols-3 gap-4 py-5">

        <div className="bg-white dark:bg-black/20 border-slate-700 border shadow-md rounded-lg p-4 h-full">
          <h1 className="font-semibold text-lg dark:text-white mb-2">Students</h1>
          <div className="overflow-y-auto h-80">
            <PieChart />
          </div>
        </div>
        <div className="bg-white dark:bg-black/20 border-slate-700 border shadow-md rounded-lg p-4 h-full">
          <h1 className="font-semibold text-lg dark:text-white mb-2">Teacher List</h1>
          <div className="overflow-y-auto h-80">
            <TeacherList />
          </div>
        </div>
        <div className="bg-white dark:bg-black/20 border-slate-700 border shadow-md rounded-lg p-4 h-full">
          <div className="flex items-center justify-between mb-1  ">
            <h1 className='text-lg font-semibold dark:text-white'>Timeline</h1>
            <AddTimelineModal handleNewTimeline={handleNewTimeline} />
          </div>
          <div className="overflow-y-auto h-80">
            <Timeline data={timelines} />
          </div>
        </div>



      </div>

    </div>
  )
}

export default Dashboard

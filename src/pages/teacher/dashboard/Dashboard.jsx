import { FaBookOpen, FaUsers, FaChalkboardTeacher } from "react-icons/fa";
import { getSession } from "../../../api/auth.js";
import TodaysLecture from "./TodaysLecture.jsx";
import { useState } from "react";
import PostFeed from "../../../components/PostFeed.jsx";

const Dashboard = () => {
  const user = getSession();
  const myClassesCount = 4;
  const totalStudents = 110;

  const [myclasses, setMyclasses] = useState([
    { id: 1, subject: "Mathematics", class: "Class 6A", time: "9:00 AM - 10:00 AM", duration: "1 Hour", details: "Algebra Basics" },
    { id: 2, subject: "Science", class: "Class 5B", time: "10:15 AM - 11:15 AM", duration: "1 Hour", details: "Introduction to Solar System" },
    { id: 3, subject: "English", class: "Class 4A", time: "11:30 AM - 12:30 PM", duration: "1 Hour", details: "Grammar - Tenses" },
    { id: 4, subject: "Mathematics", class: "Class 7B", time: "1:00 PM - 2:00 PM", duration: "1 Hour", details: "Geometry - Triangles" },
    { id: 5, subject: "Science", class: "Class 8A", time: "2:15 PM - 3:15 PM", duration: "1 Hour", details: "Electricity and Circuits" },
  ]);

  const [lectureInWeek] = useState([
    { subject: "Mathematics", days: ["M", "T", "TH", "F"] },
    { subject: "Science", days: ["M", "W", "F"] },
    { subject: "English", days: ["T", "TH"] },
    { subject: "Social Studies", days: ["W", "F"] },
    { subject: "Computer", days: ["M", "TH"] },
  ]);

  return (
    <div className="p-4 mt-10">
      
      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        
        <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-lg flex items-center gap-4">
          <FaChalkboardTeacher className="text-3xl text-blue-500" />
          <div>
            <h2 className="text-lg font-semibold dark:text-white">My Classes</h2>
            <p className="text-slate-700 dark:text-slate-300">{myClassesCount} Classes</p>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-lg flex items-center gap-4">
          <FaUsers className="text-3xl text-green-500" />
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Total Students</h2>
            <p className="text-slate-700 dark:text-slate-300">{totalStudents} Students</p>
          </div>
        </div>

        <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-lg flex items-center gap-4">
          <FaBookOpen className="text-3xl text-purple-500" />
          <div>
            <h2 className="text-lg font-semibold dark:text-white">Digital Library</h2>
            <p className="text-slate-700 dark:text-slate-300">Available</p>
          </div>
        </div>
      </div>

      {/* Welcome Banner */}
      <div className="bg-slate-100 dark:bg-slate-900/50 p-4 my-4 rounded-lg flex flex-col sm:flex-row items-center gap-4">
        <img src="/teacher.png" alt="Teacher" className="w-24 h-24 object-contain" />
        <div>
          <h1 className="font-semibold text-2xl dark:text-slate-300">Welcome Back,</h1>
          <h1 className="font-semibold text-blue-700 text-3xl">{user.username}</h1>
          <p className="font-medium dark:text-slate-400 mt-2">
            Great to see you back! Your lectures and students are waiting. Keep inspiring!
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Today's Lecture */}
        <div className="lg:col-span-2">
          <h1 className="font-semibold text-xl dark:text-white bg-slate-900/50 py-3 px-2 rounded-t-lg">Today's Lectures</h1>
          <TodaysLecture prop={{ myclasses, setMyclasses }} />
        </div>

        {/* Weekly Lecture */}
        <div className="dark:bg-slate-900/50 bg-slate-100 p-4 rounded-md ">
          <h1 className="font-semibold text-xl dark:text-white mb-3">Lectures This Week</h1>
          {lectureInWeek.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-slate-400 py-2">
              <h1 className="font-medium text-slate-500">{item.subject}</h1>
              <h1 className="font-medium text-slate-500">{item.days.join(" - ")}</h1>
            </div>
          ))}
        </div>

      </div>

      {/* Notice Board */}
      <div className="mt-6 max-h-screen overflow-y-auto">
        <h1 className="font-semibold text-xl dark:text-white mb-2">Notice Board</h1>
        <PostFeed />
      </div>

    </div>
  );
};

export default Dashboard;

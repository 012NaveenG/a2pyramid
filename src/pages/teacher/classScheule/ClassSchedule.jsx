import { useState } from 'react';
import { FaClock, FaMapMarkerAlt, FaCalendarDay } from 'react-icons/fa';

const Schedule = () => {
  const [schedule] = useState([
    { id: 1, subject: "Mathematics", class: "Class 6A", day: "Monday", time: "10:00 AM - 10:45 AM", location: "Room 101" },
    { id: 2, subject: "Science", class: "Class 6B", day: "Monday", time: "11:00 AM - 11:45 AM", location: "Room 102" },
    { id: 3, subject: "English", class: "Class 7A", day: "Tuesday", time: "09:00 AM - 09:45 AM", location: "Room 105" },
    { id: 4, subject: "Computer", class: "Class 8A", day: "Wednesday", time: "12:00 PM - 12:45 PM", location: "Lab 1" },
    { id: 5, subject: "Mathematics", class: "Class 6A", day: "Thursday", time: "10:00 AM - 10:45 AM", location: "Room 101" },
    { id: 6, subject: "Science", class: "Class 6B", day: "Friday", time: "11:00 AM - 11:45 AM", location: "Room 102" }
  ]);

  return (
    <div className='p-4 mt-10'>
      <h1 className="text-2xl font-bold dark:text-white mb-6">Weekly Class Timetable</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedule.map((lecture) => (
          <div key={lecture.id} className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-lg shadow hover:scale-[1.02] transition-all">
            
            <h2 className="text-xl font-semibold dark:text-white mb-2">{lecture.subject} - {lecture.class}</h2>

            <div className="text-slate-700 dark:text-slate-300 space-y-1">
              <p className="flex items-center gap-2">
                <FaCalendarDay className="text-blue-500" /> <strong>Day:</strong> {lecture.day}
              </p>
              <p className="flex items-center gap-2">
                <FaClock className="text-green-500" /> <strong>Time:</strong> {lecture.time}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-500" /> <strong>Location:</strong> {lecture.location}
              </p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;

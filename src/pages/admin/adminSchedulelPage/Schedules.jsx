import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow, Select, TableHeadCell } from "flowbite-react";

const Schedule = ({ role, userClass, teacherName }) => {

  const schedules = [
  {
    class: "Class 1A",
    schedule: [
      { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Math", teacher: "Rahul Sharma" },
      { day: "Monday", time: "10:15 AM - 11:15 AM", subject: "Science", teacher: "Pooja Mehta" },
      { day: "Wednesday", time: "9:00 AM - 10:00 AM", subject: "English", teacher: "Sunita Yadav" },
      { day: "Friday", time: "11:30 AM - 12:30 PM", subject: "Computer", teacher: "Amit Singh" },
    ],
  },
  {
    class: "Class 2B",
    schedule: [
      { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "English", teacher: "Sunita Yadav" },
      { day: "Tuesday", time: "10:15 AM - 11:15 AM", subject: "Computer", teacher: "Amit Singh" },
      { day: "Thursday", time: "9:00 AM - 10:00 AM", subject: "Math", teacher: "Rahul Sharma" },
      { day: "Friday", time: "10:15 AM - 11:15 AM", subject: "Science", teacher: "Pooja Mehta" },
    ],
  },
  {
    class: "Class 3C",
    schedule: [
      { day: "Monday", time: "8:00 AM - 9:00 AM", subject: "History", teacher: "Neha Sinha" },
      { day: "Wednesday", time: "10:00 AM - 11:00 AM", subject: "Geography", teacher: "Arjun Kumar" },
      { day: "Thursday", time: "11:15 AM - 12:15 PM", subject: "English", teacher: "Sunita Yadav" },
      { day: "Friday", time: "9:00 AM - 10:00 AM", subject: "Science", teacher: "Pooja Mehta" },
    ],
  },
  {
    class: "Class 4D",
    schedule: [
      { day: "Tuesday", time: "8:00 AM - 9:00 AM", subject: "Math", teacher: "Rahul Sharma" },
      { day: "Wednesday", time: "9:15 AM - 10:15 AM", subject: "History", teacher: "Neha Sinha" },
      { day: "Thursday", time: "10:30 AM - 11:30 AM", subject: "Science", teacher: "Pooja Mehta" },
      { day: "Friday", time: "11:45 AM - 12:45 PM", subject: "English", teacher: "Sunita Yadav" },
    ],
  },
];

  const [selectedClass, setSelectedClass] = useState(userClass || schedules[0].class);

  let filteredSchedule = [];

  if (role === "admin") {
    filteredSchedule = schedules.find(item => item.class === selectedClass)?.schedule || [];
  }
  else if (role === "teacher") {
    filteredSchedule = schedules
      .flatMap(item => item.schedule.filter(s => s.teacher === teacherName));
  }
  else if (role === "student") {
    filteredSchedule = schedules.find(item => item.class === userClass)?.schedule || [];
  }

  return (
    <div className="p-5 mt-10 bg-white dark:bg-slate-900 rounded-lg shadow h-full">
      <h1 className="text-2xl font-semibold mb-4 dark:text-white">Schedule</h1>

      {role === "admin" && (
        <div className="mb-4">
          <Select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)}>
            {schedules.map((item, idx) => (
              <option key={idx} value={item.class}>{item.class}</option>
            ))}
          </Select>
        </div>
      )}

      <Table className="overflow-y-auto h-3/4">
        <TableHead>
          <TableRow>
            <TableHeadCell>Day</TableHeadCell>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Subject</TableHeadCell>
            <TableHeadCell>Teacher</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredSchedule.map((item, idx) => (
            <TableRow key={idx} className="hover:bg-gray-100 dark:hover:bg-slate-800">
              <TableCell>{item.day}</TableCell>
              <TableCell>{item.time}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell>{item.teacher}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Schedule;

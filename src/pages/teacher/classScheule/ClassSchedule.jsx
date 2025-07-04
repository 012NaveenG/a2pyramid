import { useState } from 'react';

const Schedule = () => {
    const [schedule, setSchedule] = useState([
        {
            id: 1,
            subject: "Mathematics",
            class: "Class 6A",
            day: "Monday",
            time: "10:00 AM - 10:45 AM",
            location: "Room 101"
        },
        {
            id: 2,
            subject: "Science",
            class: "Class 6B",
            day: "Monday",
            time: "11:00 AM - 11:45 AM",
            location: "Room 102"
        },
        {
            id: 3,
            subject: "English",
            class: "Class 7A",
            day: "Tuesday",
            time: "09:00 AM - 09:45 AM",
            location: "Room 105"
        },
        {
            id: 4,
            subject: "Computer",
            class: "Class 8A",
            day: "Wednesday",
            time: "12:00 PM - 12:45 PM",
            location: "Lab 1"
        },
        {
            id: 5,
            subject: "Mathematics",
            class: "Class 6A",
            day: "Thursday",
            time: "10:00 AM - 10:45 AM",
            location: "Room 101"
        },
        {
            id: 6,
            subject: "Science",
            class: "Class 6B",
            day: "Friday",
            time: "11:00 AM - 11:45 AM",
            location: "Room 102"
        }
    ]);

    return (
        <div className='p-4 mt-10'>
            <h1 className="text-2xl font-bold dark:text-white mb-4">Weekly Class Timetable</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {schedule.map((lecture) => (
                    <div key={lecture.id} className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold dark:text-white mb-2">{lecture.subject} - {lecture.class}</h2>
                        <p className="text-slate-600 dark:text-slate-300"><strong>Day:</strong> {lecture.day}</p>
                        <p className="text-slate-600 dark:text-slate-300"><strong>Time:</strong> {lecture.time}</p>
                        <p className="text-slate-600 dark:text-slate-300"><strong>Location:</strong> {lecture.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;

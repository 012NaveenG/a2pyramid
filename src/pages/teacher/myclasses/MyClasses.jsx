import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button, Pagination } from 'flowbite-react';

import DeleteModal from "../../../components/DeleteModal.jsx";
import EditClass from './EditClass.jsx';
const MyClasses = () => {

    const [lectures, setLectures] = useState([
        {
            id: 1,
            subject: "Mathematics",
            class: "Class 6A",
            date: "2025-07-01",
            time: "10:00 AM",
            status: "Completed",
            duration: 45,
            location: "Room 101",
            attendanceCount: 28,
            cancelReason: "-"
        },
        {
            id: 2,
            subject: "Science",
            class: "Class 6B",
            date: "2025-07-01",
            time: "11:00 AM",
            status: "Completed",
            duration: 45,
            location: "Room 102",
            attendanceCount: 29,
            cancelReason: "-"
        },
        {
            id: 3,
            subject: "Mathematics",
            class: "Class 6A",
            date: "2025-06-30",
            time: "10:00 AM",
            status: "Cancelled",
            duration: 0,
            location: "Room 101",
            attendanceCount: 0,
            cancelReason: "Teacher Absent"
        },
        {
            id: 4,
            subject: "Computer",
            class: "Class 7A",
            date: "2025-06-29",
            time: "09:00 AM",
            status: "Completed",
            duration: 40,
            location: "Lab 1",
            attendanceCount: 25,
            cancelReason: "-"
        },
        {
            id: 5,
            subject: "English",
            class: "Class 8B",
            date: "2025-06-28",
            time: "12:00 PM",
            status: "Completed",
            duration: 50,
            location: "Room 105",
            attendanceCount: 27,
            cancelReason: "-"
        },
        // Tum aur bhi data add kar sakte ho 
    ])

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const indexOfLast = currentPage * recordsPerPage;
    const indexOfFirst = indexOfLast - recordsPerPage;
    const currentLectures = lectures.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(lectures.length / recordsPerPage);

    const onPageChange = (page) => setCurrentPage(page);

    const handleEditLecture = (updatedData) => {
        setLectures(lectures.map((lec) =>
            lec.id === updatedData.id ? { ...lec, ...updatedData } : lec
        ))
    }
    const handleDelete = (id) => {
        setLectures(lectures.filter((lec) => lec.id !== id))
    }

    return (
        <div className='p-4 mt-10 h-full'>
            <h1 className="font-semibold text-xl dark:text-white text-slate-800 bg-slate-900/50 py-4 px-2 rounded-tr-lg rounded-tl-lg">My Classes</h1>

            <div className="overflow-x-auto mt-2 h-3/4">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Subject Name</TableHeadCell>
                            <TableHeadCell>Class</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Time</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>Duration (Min)</TableHeadCell>
                            <TableHeadCell>Location</TableHeadCell>
                            <TableHeadCell>Attendance Count</TableHeadCell>
                            <TableHeadCell>Cancellation Reason</TableHeadCell>
                            <TableHeadCell>Actions</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentLectures.map((lecture) => (
                            <TableRow key={lecture.id}>
                                <TableCell>{lecture.subject}</TableCell>
                                <TableCell>{lecture.class}</TableCell>
                                <TableCell>{lecture.date}</TableCell>
                                <TableCell>{lecture.time}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded ${lecture.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                        {lecture.status}
                                    </span>
                                </TableCell>
                                <TableCell>{lecture.duration}</TableCell>
                                <TableCell>{lecture.location}</TableCell>
                                <TableCell>{lecture.attendanceCount}</TableCell>
                                <TableCell>{lecture.cancelReason}</TableCell>
                                <TableCell>
                                    <div className="flex items-center justify-center gap-1">
                                        <EditClass data={lecture} handlEditLecture={handleEditLecture} />
                                        <DeleteModal id={lecture.id} handleDelete={handleDelete} />

                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className='flex items-center justify-center mt-5'>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} showIcons />
            </div>
        </div>
    );
}

export default MyClasses;

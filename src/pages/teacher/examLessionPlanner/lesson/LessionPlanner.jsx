import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Pagination } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import DeleteModal from "../../../../components/DeleteModal";
import EditLesson from "./EditLesson";
import AddLessonModal from "./AddLessonModal";

const LessionPlanner = ({ lessons, handleDelete, handleEditLesson, handleAddLesson }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const indexOfLast = currentPage * recordsPerPage;
    const indexOfFirst = indexOfLast - recordsPerPage;
    const currentLessons = lessons.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(lessons.length / recordsPerPage);

    const onPageChange = (page) => setCurrentPage(page);

    return (
        <div className="sm:p-4 mt-5">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold dark:text-white">Lesson Planner</h1>
                <AddLessonModal handleAddLesson={handleAddLesson} />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Subject</TableHeadCell>
                            <TableHeadCell>Class</TableHeadCell>
                            <TableHeadCell>Topic</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Time</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>Actions</TableHeadCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {currentLessons.map((lesson) => (
                            <TableRow key={lesson.id} className="bg-white dark:bg-slate-900">
                                <TableCell>{lesson.subject}</TableCell>
                                <TableCell>{lesson.class}</TableCell>
                                <TableCell>{lesson.topic}</TableCell>
                                <TableCell>{lesson.date}</TableCell>
                                <TableCell>{lesson.time}</TableCell>
                                <TableCell>
                                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                        lesson.status === 'Completed' 
                                            ? 'bg-green-200 text-green-700' 
                                            : 'bg-yellow-200 text-yellow-700'
                                    }`}>
                                        {lesson.status}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <EditLesson data={lesson} handleEditLesson={handleEditLesson} />
                                        <DeleteModal id={lesson.id} handleDelete={handleDelete} />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex justify-end mt-4">
                <Pagination 
                    currentPage={currentPage} 
                    totalPages={totalPages} 
                    onPageChange={onPageChange} 
                    showIcons 
                />
            </div>

        </div>
    );
};

export default LessionPlanner;

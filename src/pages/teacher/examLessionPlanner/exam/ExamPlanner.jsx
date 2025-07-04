import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Pagination } from "flowbite-react";
import DeleteModal from "../../../../components/DeleteModal.jsx";
import EditExam from "./EditExam.jsx";
import AddExamModal from "./AddExamModal.jsx";

const ExamPlanner = ({ exams, handleDelete, handleEditExam, handleAddExam }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const indexOfLast = currentPage * recordsPerPage;
    const indexOfFirst = indexOfLast - recordsPerPage;
    const currentExam = exams.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(exams.length / recordsPerPage);

    const onPageChange = (page) => setCurrentPage(page);

    return (
        <div className="p-4 mt-10">

            <div className="flex items-center justify-between mb-4">
                <h1 className="text-xl font-semibold dark:text-white">Exam Planner</h1>
                <AddExamModal handleAddExam={handleAddExam} />
            </div>

            <div className="overflow-x-auto h-1/2 overflow-y-auto">
                <Table striped hoverable>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Exam Name</TableHeadCell>
                            <TableHeadCell>Subject</TableHeadCell>
                            <TableHeadCell>Class</TableHeadCell>
                            <TableHeadCell>Topic</TableHeadCell>
                            <TableHeadCell>Date</TableHeadCell>
                            <TableHeadCell>Time</TableHeadCell>
                            <TableHeadCell>Actions</TableHeadCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {currentExam.length > 0 ? currentExam.map((exam) => (
                            <TableRow key={exam.id} className="bg-white dark:bg-slate-900">
                                <TableCell>{exam.exam}</TableCell>
                                <TableCell>{exam.subject}</TableCell>
                                <TableCell>{exam.class}</TableCell>
                                <TableCell>{exam.topic}</TableCell>
                                <TableCell>{exam.date}</TableCell>
                                <TableCell>{exam.time}</TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <EditExam data={exam} handleEditExam={handleEditExam} />
                                        <DeleteModal id={exam.id} handleDelete={handleDelete} />
                                    </div>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow>
                                <TableCell colSpan="7" className="text-center text-gray-500 dark:text-gray-400">
                                    No Exams Scheduled
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {totalPages > 1 && (
                <div className="flex justify-end py-4">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                        showIcons
                    />
                </div>
            )}
        </div>
    );
};

export default ExamPlanner;

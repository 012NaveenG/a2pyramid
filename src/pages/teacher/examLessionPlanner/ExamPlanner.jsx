import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button, Pagination } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import DeleteModal from "../../../components/DeleteModal";
import EditExam from "./EditExam";

const ExamPlanner = ({ exams, handleDelete, handleEditExam }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;

    const indexOfLast = currentPage * recordsPerPage;
    const indexOfFirst = indexOfLast - recordsPerPage;
    const currentExam = exams.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(exams.length / recordsPerPage);

    const onPageChange = (page) => setCurrentPage(page);

    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold mb-4 dark:text-white">Exam Planner</h1>

            <div className="overflow-x-auto">
                <Table>
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
                        {currentExam.map((exam) => (
                            <TableRow key={exam.id}>
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
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="flex justify-center py-5 float-end ">
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

export default ExamPlanner;

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

import DeleteModal from "../../../components/DeleteModal.jsx";
import EditClassModal from "./EditClassModal.jsx";
import { useState } from "react";

const Classes = () => {

    const [classes, setClasses] = useState([
        {
            id: 1,
            class: "Class 1A",
            classTeacher: "Geeta Vishwash",
            phone: "8568956896",
            email: "geeta@gmail.com",
            totalStudents: 25,
            totalFaculties: 5
        },
        {
            id: 2,
            class: "Class 1B",
            classTeacher: "Rahul Sharma",
            phone: "7894561230",
            email: "rahul.sharma@gmail.com",
            totalStudents: 28,
            totalFaculties: 4
        },
        {
            id: 3,
            class: "Class 2A",
            classTeacher: "Pooja Mehta",
            phone: "9988776655",
            email: "pooja.mehta@gmail.com",
            totalStudents: 30,
            totalFaculties: 6
        },
        {
            id: 4,
            class: "Class 2B",
            classTeacher: "Amit Singh",
            phone: "7788996655",
            email: "amit.singh@gmail.com",
            totalStudents: 26,
            totalFaculties: 4
        },
        {
            id: 5,
            class: "Class 3A",
            classTeacher: "Sunita Yadav",
            phone: "8899776655",
            email: "sunita.yadav@gmail.com",
            totalStudents: 32,
            totalFaculties: 7
        },
        {
            id: 6,
            class: "Class 3B",
            classTeacher: "Vivek Kumar",
            phone: "9876543210",
            email: "vivek.kumar@gmail.com",
            totalStudents: 27,
            totalFaculties: 5
        },
        {
            id: 7,
            class: "Class 4A",
            classTeacher: "Neha Gupta",
            phone: "9123456780",
            email: "neha.gupta@gmail.com",
            totalStudents: 29,
            totalFaculties: 4
        },
        {
            id: 8,
            class: "Class 4B",
            classTeacher: "Sandeep Verma",
            phone: "9988771122",
            email: "sandeep.verma@gmail.com",
            totalStudents: 24,
            totalFaculties: 3
        },
        {
            id: 9,
            class: "Class 5A",
            classTeacher: "Priya Chauhan",
            phone: "8877665544",
            email: "priya.chauhan@gmail.com",
            totalStudents: 30,
            totalFaculties: 6
        },
        {
            id: 10,
            class: "Class 5B",
            classTeacher: "Ravi Patel",
            phone: "7766554433",
            email: "ravi.patel@gmail.com",
            totalStudents: 26,
            totalFaculties: 5
        },
        {
            id: 11,
            class: "Class 6A",
            classTeacher: "Kiran Joshi",
            phone: "7654321098",
            email: "kiran.joshi@gmail.com",
            totalStudents: 33,
            totalFaculties: 7
        },
        {
            id: 12,
            class: "Class 6B",
            classTeacher: "Anil Kumar",
            phone: "9543210786",
            email: "anil.kumar@gmail.com",
            totalStudents: 29,
            totalFaculties: 6
        },
        {
            id: 13,
            class: "Class 7A",
            classTeacher: "Meena Singh",
            phone: "8521479630",
            email: "meena.singh@gmail.com",
            totalStudents: 28,
            totalFaculties: 5
        },
        {
            id: 14,
            class: "Class 7B",
            classTeacher: "Rajeev Thakur",
            phone: "7894561203",
            email: "rajeev.thakur@gmail.com",
            totalStudents: 25,
            totalFaculties: 4
        },
        {
            id: 15,
            class: "Class 8A",
            classTeacher: "Shweta Mishra",
            phone: "9871236540",
            email: "shweta.mishra@gmail.com",
            totalStudents: 27,
            totalFaculties: 5
        }
    ])

    const handleDelete = (id) => {
        setClasses(classes.filter((item) => item.id !== id));
    };

    const handleEditClass = (updatedData) => {
        setClasses(
            classes.map((cls) =>
                cls.id === updatedData.id ? { ...cls, ...updatedData } : cls
            )
        );
    };
    return (
        <div className="overflow-y-auto">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeadCell>Class</TableHeadCell>
                        <TableHeadCell>Class Teacher</TableHeadCell>
                        <TableHeadCell>Phone</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Total Students</TableHeadCell>
                        <TableHeadCell>Total Faculties</TableHeadCell>
                        <TableHeadCell>Action</TableHeadCell>
                    </TableRow>
                </TableHead>
                <TableBody className="divide-y">
                    {classes && classes.map((item, idx) => (

                        <TableRow key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {item.class}
                            </TableCell>
                            <TableCell>{item.classTeacher}</TableCell>
                            <TableCell>+91 {item.phone}</TableCell>
                            <TableCell>{item.email}</TableCell>
                            <TableCell>{item.totalStudents}</TableCell>
                            <TableCell>{item.totalFaculties}</TableCell>
                            <TableCell>
                                <div className="flex items-center justify-center gap-1">

                                    <EditClassModal data={item} handleEditClass={handleEditClass}/>
                                    <DeleteModal id={item.id} handleDelete={handleDelete} />

                                </div>

                            </TableCell>
                        </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    );
}

export default Classes




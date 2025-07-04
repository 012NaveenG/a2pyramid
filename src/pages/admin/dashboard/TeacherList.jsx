import { Button, Card } from "flowbite-react"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const TeacherList = () => {
    const teachers = [
        {
            name: 'Neha kulkarni',
            status: "Available"
        },
        {
            name: 'Rashi Khare',
            status: "Absent"
        },
        {
            name: 'Garima Sharma',
            status: "Available"
        },
        {
            name: 'Garima Sharma',
            status: "Available"
        },
        {
            name: 'Garima Sharma',
            status: "Available"
        },
        {
            name: 'Garima Sharma',
            status: "Available"
        },
        {
            name: 'Garima Sharma',
            status: "Available"
        },
        {
            name: 'Garima Sharma',
            status: "Available"
        },
        {
            name: 'Garima Sharma',
            status: "Available"
        },
        {
            name: 'Garima Sharma',
            status: "Available"
        },
        {
            name: 'Garima Sharma',
            status: "Available"
        },
    ]
    return (
     
            <div >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Teacher Name</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>

                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">


                        {teachers.map((teacher, idx) => (
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                <>
                                    <TableCell className="text-blue-600 font-semibold">{teacher.name}</TableCell>
                                    <TableCell>
                                        { }
                                        <span className={`p-1 ${teacher.status === "Available" ? "bg-green-400 text-green-900" : "bg-red-400 text-red-800"}   rounded-md font-bold `}>

                                            {teacher.status}
                                        </span>
                                    </TableCell></>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

    )
}

export default TeacherList


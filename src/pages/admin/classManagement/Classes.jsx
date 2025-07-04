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
      totalFaculties: 5,
    },
    {
      id: 2,
      class: "Class 1B",
      classTeacher: "Rahul Sharma",
      phone: "7894561230",
      email: "rahul.sharma@gmail.com",
      totalStudents: 28,
      totalFaculties: 4,
    },
    {
      id: 3,
      class: "Class 2A",
      classTeacher: "Pooja Mehta",
      phone: "9988776655",
      email: "pooja.mehta@gmail.com",
      totalStudents: 30,
      totalFaculties: 6,
    },
    {
      id: 3,
      class: "Class 2A",
      classTeacher: "Pooja Mehta",
      phone: "9988776655",
      email: "pooja.mehta@gmail.com",
      totalStudents: 30,
      totalFaculties: 6,
    },
    {
      id: 3,
      class: "Class 2A",
      classTeacher: "Pooja Mehta",
      phone: "9988776655",
      email: "pooja.mehta@gmail.com",
      totalStudents: 30,
      totalFaculties: 6,
    },
    {
      id: 3,
      class: "Class 2A",
      classTeacher: "Pooja Mehta",
      phone: "9988776655",
      email: "pooja.mehta@gmail.com",
      totalStudents: 30,
      totalFaculties: 6,
    },
    {
      id: 3,
      class: "Class 2A",
      classTeacher: "Pooja Mehta",
      phone: "9988776655",
      email: "pooja.mehta@gmail.com",
      totalStudents: 30,
      totalFaculties: 6,
    },
    {
      id: 3,
      class: "Class 2A",
      classTeacher: "Pooja Mehta",
      phone: "9988776655",
      email: "pooja.mehta@gmail.com",
      totalStudents: 30,
      totalFaculties: 6,
    },
  ]);

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
    <div className="overflow-x-auto">
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
          {classes.map((item) => (
            <TableRow key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.class}
              </TableCell>
              <TableCell className="text-sm">{item.classTeacher}</TableCell>
              <TableCell className="text-sm">+91 {item.phone}</TableCell>
              <TableCell className="text-sm">{item.email}</TableCell>
              <TableCell className="text-center">{item.totalStudents}</TableCell>
              <TableCell className="text-center">{item.totalFaculties}</TableCell>
              <TableCell>
                <div className="flex flex-wrap justify-center gap-2">
                  <EditClassModal data={item} handleEditClass={handleEditClass} />
                  <DeleteModal id={item.id} handleDelete={handleDelete} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Classes;

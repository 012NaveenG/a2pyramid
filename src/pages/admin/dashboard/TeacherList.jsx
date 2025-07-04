import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const TeacherList = () => {
  const teachers = [
    { name: 'Neha Kulkarni', status: "Available" },
    { name: 'Rashi Khare', status: "Absent" },
    { name: 'Garima Sharma', status: "Available" },
    { name: 'Deepak Mehra', status: "Available" },
    { name: 'Kiran Verma', status: "Absent" },
    { name: 'Manish Kumar', status: "Available" },
    { name: 'Priya Singh', status: "Available" },
    { name: 'Amit Joshi', status: "Absent" },
    { name: 'Swati Gupta', status: "Available" },
  ];

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Teacher Name</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {teachers.map((teacher, idx) => (
            <TableRow key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium text-blue-600 dark:text-blue-400">{teacher.name}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 text-xs sm:text-sm rounded font-bold 
                  ${teacher.status === "Available" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`}>
                  {teacher.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeacherList;

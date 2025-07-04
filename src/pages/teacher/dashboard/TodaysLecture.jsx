import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { IoDocumentTextOutline } from "react-icons/io5";
import EditClassModal from "../../admin/classManagement/EditClassModal.jsx";
import DeleteModal from "../../../components/DeleteModal.jsx";

const TodaysLecture = ({ prop }) => {
  const { myclasses, setMyclasses } = prop;

  const handleDelete = (id) => {
    const updated = myclasses.filter((cls) => cls.id !== id);
    setMyclasses(updated);
  };

  const handleEditClass = (updatedData) => {
    const updated = myclasses.map((cls) =>
      cls.id === updatedData.id ? updatedData : cls
    );
    setMyclasses(updated);
  };

  return (
    <div className="overflow-x-auto">
      <Table striped>
        <TableHead>
          <TableRow>
            <TableHeadCell>Subject</TableHeadCell>
            <TableHeadCell>Class</TableHeadCell>
            <TableHeadCell>Time</TableHeadCell>
            <TableHeadCell>Duration</TableHeadCell>
            <TableHeadCell>Details</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {myclasses.map((cls) => (
            <TableRow key={cls.id} className="dark:border-gray-700 dark:bg-gray-800">
              <TableCell className="font-medium">{cls.subject}</TableCell>
              <TableCell className="text-xs  sm:text-lg">{cls.class}</TableCell>
              <TableCell className="text-xs  sm:text-lg">{cls.time}</TableCell>
              <TableCell className="text-xs  sm:text-lg">{cls.duration}</TableCell>

              <TableCell>
                <div className="w-8 h-8 hover:bg-slate-200 dark:hover:bg-slate-700 transition rounded-full flex items-center justify-center cursor-pointer">
                  <IoDocumentTextOutline className="text-blue-600 text-xl" />
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-2">
                  <EditClassModal data={cls} handleEditClass={handleEditClass} />
                  <DeleteModal id={cls.id} handleDelete={handleDelete} />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TodaysLecture;

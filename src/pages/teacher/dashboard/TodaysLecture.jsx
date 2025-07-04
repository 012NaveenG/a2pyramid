import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react"
import { IoDocumentTextOutline } from "react-icons/io5";
import EditClassModal from "../../admin/classManagement/EditClassModal";
import DeleteModal from "../../../components/DeleteModal";
const TodaysLecture = ({ prop }) => {

    const { myclasses, setMyclasses } = prop

    const handleDelete = (id) => {

    }
    const handleEditClass = (updatedData) => {

    }

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeadCell>Subject Name</TableHeadCell>
                    <TableHeadCell>Class</TableHeadCell>
                    <TableHeadCell>Time</TableHeadCell>
                    <TableHeadCell>Duration</TableHeadCell>
                    <TableHeadCell>Details</TableHeadCell>
                    <TableHeadCell>Actions</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {myclasses.map((cls) => (
                    <TableRow key={cls.id}>
                        <TableCell>{cls.subject}</TableCell>
                        <TableCell>{cls.class}</TableCell>
                        <TableCell>{cls.time}</TableCell>
                        <TableCell>{cls.duration}</TableCell>
                        <TableCell>
                            <div className="w-8 h-8  hover:bg-slate-200  dark:hover:bg-slate-700 transition-all duration-75 ease-in rounded-full flex items-center justify-center cursor-pointer">
                                <IoDocumentTextOutline className="font-bold text-xl text-blue-600 cursor-pointer" />

                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center  gap-1">

                                <EditClassModal data={cls} handleEditClass={handleEditClass} />
                                <DeleteModal id={cls.id} handleDelete={handleDelete} />

                            </div>
                        </TableCell>
                    </TableRow>
                ))}

            </TableBody>
        </Table>

    )
}

export default TodaysLecture

import { useState } from "react";
import { FaDownload, FaPlus, FaSearch } from "react-icons/fa";
import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput } from "flowbite-react";
import DeleteModal from "../../components/DeleteModal.jsx";
import { getSession } from "../../api/users.js";

const sampleMaterials = [
    { bookId: "B001", title: "Math Notes - Class 10", subject: "Math", type: "PDF", status: "Available", lastBorrowed: "2024-06-15", borrower: "-", location: "Shelf A1" },
    { bookId: "B002", title: "Science Video - Solar System", subject: "Science", type: "Video", status: "Borrowed", lastBorrowed: "2024-06-28", borrower: "Rahul Sharma", location: "Shelf B2" },
    { bookId: "B003", title: "English Grammar Notes", subject: "English", type: "PDF", status: "Available", lastBorrowed: "-", borrower: "-", location: "Shelf C3" },
    { bookId: "B004", title: "Physics Handbook", subject: "Physics", type: "PDF", status: "Borrowed", lastBorrowed: "2024-06-30", borrower: "Pooja Mehta", location: "Shelf A2" },
    { bookId: "B005", title: "Chemistry Formula Sheet", subject: "Chemistry", type: "PDF", status: "Available", lastBorrowed: "-", borrower: "-", location: "Shelf B1" },
    { bookId: "B006", title: "History Video - World War", subject: "History", type: "Video", status: "Available", lastBorrowed: "-", borrower: "-", location: "Shelf C2" },
    { bookId: "B007", title: "Geography Atlas", subject: "Geography", type: "PDF", status: "Borrowed", lastBorrowed: "2024-06-25", borrower: "Amit Singh", location: "Shelf D1" },
    { bookId: "B008", title: "Biology Notes - Human Body", subject: "Biology", type: "PDF", status: "Available", lastBorrowed: "-", borrower: "-", location: "Shelf A3" },
    { bookId: "B009", title: "Computer Science Basics", subject: "Computer", type: "PDF", status: "Borrowed", lastBorrowed: "2024-06-27", borrower: "Sunita Yadav", location: "Shelf B3" },
    { bookId: "B010", title: "Hindi Sahitya", subject: "Hindi", type: "PDF", status: "Available", lastBorrowed: "-", borrower: "-", location: "Shelf C1" },
];

const LibraryPage = () => {

    const user = getSession()
    const [materials, setMaterials] = useState(sampleMaterials);
    const [search, setSearch] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page) => setCurrentPage(page);

    const filtered = materials.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-5">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold dark:text-white">Digital Library</h1>
                {user.role === "admin" ? <>
                    <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded">
                        <FaPlus /> Upload Material
                    </button>
                </> : ""}
            </div>

            <TextInput
                type="text"
                placeholder="Search materials..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                icon={FaSearch}
                className="mb-4"
            />

            <div className="overflow-y-auto">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Book ID</TableHeadCell>
                            <TableHeadCell>Title</TableHeadCell>
                            <TableHeadCell>Subject</TableHeadCell>
                            <TableHeadCell>Type</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>Last Borrowed</TableHeadCell>
                            <TableHeadCell>Borrower Name</TableHeadCell>
                            <TableHeadCell>Shelf Location</TableHeadCell>
                            <TableHeadCell>Actions</TableHeadCell>
                        </TableRow>
                    </TableHead>

                    <TableBody className="divide-y">
                        {filtered.map((item, idx) => (
                            <TableRow key={idx} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell>{item.bookId}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.subject}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell className={`${item.status === "Available" ? "text-green-500" : "text-red-500"}`}>{item.status}</TableCell>
                                <TableCell>{item.lastBorrowed}</TableCell>
                                <TableCell>{item.borrower}</TableCell>
                                <TableCell>{item.location}</TableCell>
                                <TableCell>
                                    <a href={item.url} download className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-1">
                                        <FaDownload /> Download
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex overflow-x-auto sm:justify-center float-end">
                    <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} showIcons />
                </div>
            </div>
        </div>
    );
};

export default LibraryPage;

import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput } from "flowbite-react";

const feeRecords = [
    { id: 1, term: "Quarter 1 (April - June)", amount: 7500, status: "Paid", date: "05-04-2025" },
    { id: 2, term: "Quarter 2 (July - September)", amount: 7500, status: "Unpaid", date: "-" },
    { id: 3, term: "Quarter 3 (October - December)", amount: 7500, status: "Unpaid", date: "-" },
    { id: 4, term: "Quarter 4 (January - March)", amount: 7500, status: "Unpaid", date: "-" },
];


const FeeStatus = () => {
    const currentYear = new Date().getFullYear();
    const academicYear = `${currentYear}-${currentYear + 1}`;

    return (
        <div className="p-5 mt-10">
            <h1 className="text-2xl font-bold dark:text-white mb-4">Fee Status - Academic Year {academicYear} </h1>

            <div className="overflow-x-auto">
                <Table>

                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Term</TableHeadCell>
                            <TableHeadCell>Amount (₹)</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>Paid Date</TableHeadCell>
                        </TableRow>
                    </TableHead>


                    <TableBody className="divide-y">
                        {feeRecords.map((record) => (
                            <TableRow key={record.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell>{record.term}</TableCell>
                                <TableCell>{record.amount}</TableCell>
                                <TableCell>
                                    {record.status === "Paid" ? (
                                        <span className="text-green-600 font-semibold">Paid</span>
                                    ) : (
                                        <span className="text-red-600 font-semibold">Unpaid</span>
                                    )}
                                </TableCell>
                                <TableCell>{record.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default FeeStatus



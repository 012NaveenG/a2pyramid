
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineFeed } from "react-icons/md";
import AttendanceChart from "./AttendanceChart.jsx";
import { getSession } from "../../../api/users.js";

const Dashboard = () => {

    const user = getSession()
    const studentData = {
        name: "Aman Kumar",
        class: "Class 5B",
        teacher: "Ravi Patel",
        totalStudents: 26,
        feeStatus: "Paid",
    };

    return (
        <div className="p-4">
            <div className="flex items-center justify-center w-full gap-2">
                <div className="w-3/4 flex items-center gap-2 px-5 bg-slate-100 shadow  dark:bg-slate-900/50 rounded-xl">
                    <AttendanceChart />
                    <div >
                        <h1 className="font-bold text-pink-700 text-3xl ">Good Job, <span className="text-green-600"> {user.username}.</span> Keep Going</h1>
                        <p className="font-semibold text-slate-700 dark:text-slate-400 w-3/4">You task are 80% completed this week. Keep it up and improve your result. Progress is very good!!!</p>
                        <div className="flex items-center gap-5">

                            <p className="flex items-center gap-2 dark:text-slate-400 text-slate-700 text-lg ">
                                <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block"></span>Present</p>
                            <p className="flex items-center gap-2 dark:text-slate-400 text-slate-700 text-lg ">
                                <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Absent</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/4">
                     <div className="px-4 py-2 mb-2 bg-slate-100 dark:bg-slate-900/50 rounded-lg">
                    <div className="flex items-center gap-3">
                        <SiGoogleclassroom className="text-3xl text-blue-500" />
                        <h2 className="font-bold text-lg dark:text-white">My Class</h2>
                    </div>
                    <p className="mt-2 dark:text-white"> {studentData.class} | Teacher: {studentData.teacher} | Students: {studentData.totalStudents}</p>
                </div>

                    <div className=" p-6 mb-2 bg-slate-100 dark:bg-slate-900/50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <MdOutlineFeed className="text-3xl text-yellow-500" />
                            <h2 className="font-bold text-lg dark:text-white">Fee Status</h2>
                        </div>
                        <p className="mt-2 dark:text-white">{studentData.feeStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

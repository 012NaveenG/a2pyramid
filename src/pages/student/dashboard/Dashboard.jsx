import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineFeed } from "react-icons/md";
import AttendanceChart from "./AttendanceChart.jsx";
import { getSession } from "../../../api/users.js";
import PostFeed from "../../../components/PostFeed.jsx";

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
        <div className="p-4 mt-16">
            {/* Top Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-4">
                
                {/* Attendance & Progress Card */}
                <div className="w-full lg:w-3/4 flex flex-col md:flex-row items-center gap-4 px-4 py-6 bg-slate-100 shadow dark:bg-slate-900/50 rounded-xl">
                    
                    <div className="w-full md:w-1/2">
                        <AttendanceChart />
                    </div>

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h1 className="font-bold text-pink-700 text-2xl sm:text-3xl">
                            Good Job, <span className="text-green-600">{user.username}.</span> Keep Going
                        </h1>
                        <p className="font-semibold text-slate-700 dark:text-slate-400 mt-2">
                            Your tasks are 80% completed this week. Keep it up and improve your result. Progress is very good!!!
                        </p>
                        <div className="flex justify-center md:justify-start items-center gap-5 mt-4">
                            <p className="flex items-center gap-2 dark:text-slate-400 text-slate-700 text-lg">
                                <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block"></span>Present
                            </p>
                            <p className="flex items-center gap-2 dark:text-slate-400 text-slate-700 text-lg">
                                <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>Absent
                            </p>
                        </div>
                    </div>

                </div>

                {/* Class & Fee Info */}
                <div className="w-full lg:w-1/4 flex flex-col gap-4">

                    <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900/50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <SiGoogleclassroom className="text-3xl text-blue-500" />
                            <h2 className="font-bold text-lg dark:text-white">My Class</h2>
                        </div>
                        <p className="mt-2 dark:text-white text-sm">
                            {studentData.class} | Teacher: {studentData.teacher} | Students: {studentData.totalStudents}
                        </p>
                    </div>

                    <div className="px-4 py-3 bg-slate-100 dark:bg-slate-900/50 rounded-lg">
                        <div className="flex items-center gap-3">
                            <MdOutlineFeed className="text-3xl text-yellow-500" />
                            <h2 className="font-bold text-lg dark:text-white">Fee Status</h2>
                        </div>
                        <p className="mt-2 dark:text-white text-sm">{studentData.feeStatus}</p>
                    </div>

                </div>

            </div>

            {/* Notice Section */}
            <div className="dark:bg-slate-900/50 w-full p-4 mt-6 max-h-[70vh] overflow-y-auto">
                <h1 className="font-semibold text-xl dark:text-white text-slate-900 mb-4">Notice</h1>
                <PostFeed />
            </div>

        </div>
    );
};

export default Dashboard;

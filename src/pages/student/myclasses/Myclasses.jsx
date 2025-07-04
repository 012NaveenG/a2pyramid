const schedules = [
    { day: "Monday", time: "9:00 AM - 10:00 AM", subject: "Math", teacher: "Rahul Sharma" },
    { day: "Monday", time: "10:15 AM - 11:15 AM", subject: "Science", teacher: "Pooja Mehta" },
    { day: "Tuesday", time: "9:00 AM - 10:00 AM", subject: "English", teacher: "Sunita Yadav" },
    { day: "Wednesday", time: "10:30 AM - 11:30 AM", subject: "Computer", teacher: "Amit Singh" },
];

const MyClasses = () => {
    const className = "Class 5A"; // Dynamic bana sakte ho

    return (
        <div className="p-4 sm:p-6 md:p-8 mt-16 max-w-5xl mx-auto sm:mx-0">
            <h1 className="text-xl sm:text-2xl font-bold dark:text-white mb-6 text-center">
                {className} - Weekly Schedule
            </h1>

            <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {schedules.map((item, idx) => (
                    <div key={idx} className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded-lg shadow hover:scale-[1.02] transition">
                        <h2 className="text-lg font-semibold dark:text-white mb-2">{item.subject}</h2>
                        <p className="text-slate-700 dark:text-slate-300 mb-1">
                            <strong>Day:</strong> {item.day}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300 mb-1">
                            <strong>Time:</strong> {item.time}
                        </p>
                        <p className="text-slate-700 dark:text-slate-300">
                            <strong>Teacher:</strong> {item.teacher}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyClasses;

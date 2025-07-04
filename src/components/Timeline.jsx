
import { IoMdTime } from "react-icons/io";

const Timeline = ({data}) => {
 

  const getDayLabel = (eventDate) => {
    const today = new Date();
    const event = new Date(eventDate);

    const diffTime = event.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    if (diffDays === 0) return "Today";
    if (diffDays === -1) return "Yesterday";
    if (diffDays === 1) return "Tomorrow";
    return event.toLocaleDateString('en-US', { weekday: 'long' });
  };

  // Sorted by date ascending
  const sortedTimelines = data.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    < >
      {sortedTimelines.map((event, idx) => {
        const day = event.date.getDate();
        const month = event.date.toLocaleString('default', { month: 'short' });
        const dayLabel = getDayLabel(event.date);

        return (
          <div key={idx} className="bg-slate-100 dark:bg-slate-900 p-2 mt-2 rounded-lg">
            <div className="flex items-center justify-between">
              <h1 className="dark:text-slate-300 font-semibold">{dayLabel}</h1>
              {dayLabel === "Today" && (
                <h1 className="bg-red-400 rounded-xl px-2 text-red-600 font-semibold">Today</h1>
              )}
              {dayLabel === "Yesterday" && (
                <h1 className="bg-yellow-400 rounded-xl px-2 text-yellow-700 font-semibold">Yesterday</h1>
              )}
              {dayLabel === "Tomorrow" && (
                <h1 className="bg-green-400 rounded-xl px-2 text-green-700 font-semibold">Tomorrow</h1>
              )}
            </div>

            <div className="flex items-center gap-5 mt-2">
              <div className="w-16 h-16 rounded-md bg-violet-500 p-2 flex flex-col items-center justify-center">
                <h1 className="font-semibold dark:text-white text-xl">{day}</h1>
                <h1 className="font-semibold dark:text-white">{month}</h1>
              </div>

              <div className="p-2">
                <h1 className="font-semibold dark:text-white text-xl">{event.title}</h1>
                <div className="flex items-center gap-2 mt-1">
                  <IoMdTime className="text-xl dark:text-white" />
                  <h1 className="font-semibold dark:text-white">{event.time}</h1>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Timeline;

import { useState } from "react";
import { FaSearch, FaBusAlt, FaMapMarkedAlt } from "react-icons/fa";
import { TextInput } from "flowbite-react";

const busesData = [
  { busNumber: "UP78 AB 1234", route: "Route 1", status: "Running", location: "Near Gate No.2" },
  { busNumber: "UP78 CD 5678", route: "Route 2", status: "Delayed", location: "5 km away" },
  { busNumber: "UP78 EF 9101", route: "Route 3", status: "Arrived", location: "At School" },
];

const BusTracking = () => {
  const [search, setSearch] = useState("");

  const filteredBuses = busesData.filter((bus) =>
    bus.busNumber.toLowerCase().includes(search.toLowerCase()) ||
    bus.route.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold dark:text-white mb-4">Bus Live Tracking</h1>

      <div className="flex items-center mb-4 gap-2">
        <TextInput
          type="text"
          placeholder="Search by Bus Number or Route..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={FaSearch} 
          className="w-1/2"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredBuses.map((bus, idx) => (
          <div key={idx} className="bg-slate-100 dark:bg-slate-900/50 rounded-lg p-4 shadow flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold dark:text-white flex items-center gap-2">
                <FaBusAlt /> {bus.busNumber}
              </h2>
              <span
                className={`px-2 py-1 rounded text-xs ${
                  bus.status === "Running"
                    ? "bg-green-500 text-white"
                    : bus.status === "Delayed"
                    ? "bg-yellow-500 text-white"
                    : "bg-blue-500 text-white"
                }`}
              >
                {bus.status}
              </span>
            </div>
            <p className="dark:text-slate-300">Route: {bus.route}</p>
            <p className="dark:text-slate-300">Current Location: {bus.location}</p>
            <button className="bg-blue-500 text-white py-1 px-3 rounded flex items-center gap-1 mt-2">
              <FaMapMarkedAlt /> View on Map
            </button>
          </div>
        ))}
      </div>

      {/* Placeholder for Map */}
      <div className="mt-6 h-64 bg-slate-200 dark:bg-slate-900/50 flex items-center justify-center rounded-lg">
        <p className="text-gray-600 dark:text-slate-400">[Map Integration Coming Soon]</p>
      </div>
    </div>
  );
};

export default BusTracking;

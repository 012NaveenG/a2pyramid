import Classes from "./Classes.jsx";

const Classmanagement = () => {
  return (
    <div className="p-3 sm:p-5 mt-16">
      <h1 className="font-bold text-xl sm:text-2xl dark:text-white border-b border-slate-400 pb-2">
        Class Management
      </h1>

      <div className="mt-4 max-h-[80vh] overflow-y-auto">
        <Classes />
      </div>
    </div>
  );
};

export default Classmanagement;

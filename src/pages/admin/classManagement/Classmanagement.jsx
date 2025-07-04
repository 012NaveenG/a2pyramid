import Classes from "./Classes.jsx"

const Classmanagement = () => {
  return (
    <div className="p-2 mt-10">
      <h1 className="font-bold text-2xl dark:text-white border-b border-slate-400">Class Managements</h1>

      <div className="mt-5 h-screen overflow-y-auto">
        <Classes/>
      </div>
    </div>
  )
}

export default Classmanagement

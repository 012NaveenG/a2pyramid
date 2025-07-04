import { useEffect, useState } from "react";
import { deleteFile, fetchFiles, uploadFile } from "../../api/files.js";
import AddLibMaterial from "./AddLibMaterial.jsx";
import { FaDownload, FaFilePdf, FaVideo } from "react-icons/fa";
import DeleteModal from "../../components/DeleteModal.jsx";
import { getSession } from "../../api/auth.js";

const LibraryPage = () => {
    const [materials, setMaterials] = useState([]);
    const user = getSession()

    const loadFiles = async () => {
        const files = await fetchFiles();
        setMaterials(files);
    };

    useEffect(() => {
        loadFiles();
    }, []);

    const handleAddMaterial = async (formData) => {
        await uploadFile(formData);
        loadFiles();  // Refresh list
    };

    const handleDelete = async (id) => {
        await deleteFile(id)
        setMaterials(materials.filter((mat) => mat.id !== id))
    }

    const getFileTypeIcon = (fileName) => {
        const ext = fileName.split(".").pop().toLowerCase();
        if (ext === "pdf") return <FaFilePdf className="text-6xl text-red-600" />;
        if (["mp4", "mov"].includes(ext)) return <FaVideo className="text-6xl text-green-500" />;
        return <FaFilePdf className="text-6xl text-gray-500" />;
    };

    const getDisplayName = (fileName) => {
        const lastDot = fileName.lastIndexOf(".");
        return lastDot !== -1 ? fileName.substring(0, lastDot) : fileName;
    };

    return (
        <div className="p-5 mt-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold dark:text-white">Digital Library</h1>
                <AddLibMaterial handleAddMaterial={handleAddMaterial} />
            </div>

            <div className="grid grid-cols-4 gap-4">
                {materials.map((mat) => (
                    <div key={mat.id} className="dark:bg-slate-900/50 rounded-md p-4 flex flex-col items-center gap-2">
                        {getFileTypeIcon(mat.name)}
                        <h1 className="font-semibold text-center text-slate-400">{getDisplayName(mat.name)}</h1>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <a href={mat.url} download className="bg-blue-500 text-white px-2 py-1 rounded flex items-center gap-1">
                                <FaDownload /> Download
                            </a>
                            {user.role === "admin" ? <div>
                                <DeleteModal id={mat.id} handleDelete={handleDelete} />
                            </div> : ""}


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LibraryPage;

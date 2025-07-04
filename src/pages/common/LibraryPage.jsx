import { useEffect, useState } from "react";
import { deleteFile, fetchFiles, uploadFile } from "../../api/files.js";
import AddLibMaterial from "./AddLibMaterial.jsx";
import { FaDownload, FaFilePdf, FaVideo } from "react-icons/fa";
import DeleteModal from "../../components/DeleteModal.jsx";
import { getSession } from "../../api/auth.js";

const LibraryPage = () => {
    const [materials, setMaterials] = useState([]);
    const user = getSession();

    const loadFiles = async () => {
        const files = await fetchFiles();
        setMaterials(files);
    };

    useEffect(() => {
        loadFiles();
    }, []);

    const handleAddMaterial = async (formData) => {
        await uploadFile(formData);
        loadFiles();
    };

    const handleDelete = async (id) => {
        await deleteFile(id);
        setMaterials(materials.filter((mat) => mat.id !== id));
    };

    const getFileTypeIcon = (fileName) => {
        const ext = fileName.split(".").pop().toLowerCase();
        if (ext === "pdf") return <FaFilePdf className="text-5xl sm:text-6xl text-red-600" />;
        if (["mp4", "mov"].includes(ext)) return <FaVideo className="text-5xl sm:text-6xl text-green-500" />;
        return <FaFilePdf className="text-5xl sm:text-6xl text-gray-500" />;
    };

    const getDisplayName = (fileName) => {
        const lastDot = fileName.lastIndexOf(".");
        return lastDot !== -1 ? fileName.substring(0, lastDot) : fileName;
    };

    return (
        <div className="p-4 sm:p-6 mt-16 max-w-7xl mx-auto sm:mx-0">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-xl sm:text-2xl font-bold dark:text-white">Digital Library</h1>
                {user.role === "admin" && (
                    <AddLibMaterial handleAddMaterial={handleAddMaterial} />
                )}
            </div>

            {materials.length === 0 ? (
                <p className="text-center text-gray-500 dark:text-gray-400">No materials uploaded yet.</p>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {materials.map((mat) => (
                        <div key={mat.id} className="dark:bg-slate-900/50 bg-slate-100 rounded-md p-4 flex flex-col items-center justify-between gap-2 shadow">
                            {getFileTypeIcon(mat.name)}
                            <h1 className="font-semibold text-center text-slate-500 text-sm break-words w-3/4 sm:w-full">
                                {getDisplayName(mat.name)}
                                
                            </h1>
                            <div className="flex flex-wrap justify-center gap-2 mt-2">
                                <a
                                    href={mat.url}
                                    download
                                    className="bg-blue-500 text-white px-2 py-1 text-sm rounded flex items-center gap-1"
                                >
                                    <FaDownload /> Download
                                </a>
                                {user.role === "admin" && (
                                    <DeleteModal id={mat.id} handleDelete={handleDelete} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LibraryPage;

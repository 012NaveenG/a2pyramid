import { useState } from "react";
import { Button, FileInput, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { FaPlus } from "react-icons/fa";

const AddLibMaterial = ({ handleAddMaterial }) => {

    const [openModal, setOpenModal] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!file) return alert("Please upload a file");

        const formData = new FormData();
        formData.append("file", file);

        handleAddMaterial(formData);

        setOpenModal(false);
        setFile(null);
    };

    return (
        <>
            <button
                className="flex items-center gap-1 bg-green-500 text-white cursor-pointer px-3 py-1 rounded"
                onClick={() => setOpenModal(true)}
            >
                <FaPlus /> Add Material
            </button>

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <ModalHeader />
                <ModalBody>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Library Material</h3>

                        <FileInput id="file-upload" onChange={handleFileChange} required />

                        <div className="w-full">
                            <Button type="submit" className="cursor-pointer">Add Material</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default AddLibMaterial;

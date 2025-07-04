

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";

const DeleteModal = ({ id, handleDelete }) => {
    const [openModal, setOpenModal] = useState(false);

    const deleteItem = () => {
        try {
            handleDelete(id)
            setOpenModal(false)
        } catch (error) {

        }
    }
    return (
        <>
            <button onClick={() => setOpenModal(true)} className="w-8 h-8  transition-all duration-75 ease-in cursor-pointer hover:bg-slate-700 rounded-full flex items-center justify-center">
                <RiDeleteBin6Line className="font-bold text-xl  text-red-700" />
            </button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <ModalHeader />
                <ModalBody>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button className="cursor-pointer" color="red" onClick={deleteItem}>
                                Yes, I'm sure
                            </Button>
                            <Button className="cursor-pointer" color="alternative" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}


export default DeleteModal

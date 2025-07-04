import { useState } from "react";
import { Modal, ModalHeader, ModalBody, TextInput, Label, Button } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";

const EditExam = ({ data, handleEditExam }) => {
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        handleEditExam(formData);  
        setOpenModal(false);
    };

    return (
        <>
            <button onClick={() => setOpenModal(true)} className="w-8 h-8 hover:bg-slate-700 transition-all duration-75 ease-in rounded-full flex items-center justify-center cursor-pointer">
                <FaRegEdit className="font-bold text-xl text-blue-700" />
            </button>

            <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
                <ModalHeader>Edit Exam Details</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleEdit} className="space-y-4">

                        <div>
                            <Label htmlFor="exam">Exam Name</Label>
                            <TextInput
                                id="exam"
                                name="exam"
                                value={formData.exam}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="subject">Subject</Label>
                            <TextInput
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="class">Class</Label>
                            <TextInput
                                id="class"
                                name="class"
                                value={formData.class}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="topic">Topic</Label>
                            <TextInput
                                id="topic"
                                name="topic"
                                value={formData.topic}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="date">Date</Label>
                            <TextInput
                                id="date"
                                name="date"
                                type="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="time">Time</Label>
                            <TextInput
                                id="time"
                                name="time"
                                type="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="flex justify-end mt-4">
                            <Button type="submit">Update Exam</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default EditExam;

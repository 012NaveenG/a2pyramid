import { useState } from "react";
import { Modal, ModalHeader, ModalBody, TextInput, Label, Button, Select } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";

const EditLesson = ({ data, handleEditLesson }) => {
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        subject: data.subject || "",
        class: data.class || "",
        topic: data.topic || "",
        date: data.date || "",
        time: data.time || "",
        status: data.status || "Pending",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        handleEditLesson(formData);
        setOpenModal(false);
    };

    return (
        <>
            <button
                onClick={() => setOpenModal(true)}
                className="w-8 h-8 hover:bg-slate-700 transition rounded-full flex items-center justify-center cursor-pointer"
            >
                <FaRegEdit className="text-xl text-blue-700" />
            </button>

            <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
                <ModalHeader>Edit Lesson</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleEdit} className="space-y-4">

                        <div>
                            <Label htmlFor="subject">Subject</Label>
                            <TextInput
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Enter Subject"
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
                                placeholder="Enter Class"
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
                                placeholder="Enter Topic"
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

                        <div>
                            <Label htmlFor="status">Status</Label>
                            <Select
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                            >
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                            </Select>
                        </div>

                        <div className="flex justify-end pt-2">
                            <Button type="submit">Update Lesson</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default EditLesson;

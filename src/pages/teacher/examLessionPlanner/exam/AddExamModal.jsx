import { Button, Modal, ModalBody, ModalHeader, TextInput, Label } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const AddExamModal = ({ handleAddExam }) => {

    const [openModal, setOpenModal] = useState(false);
    const [exam, setExam] = useState({
        exam: "",
        subject: "",
        class: "",
        topic: "",
        date: "",
        time: ""
    });

    const handleChange = (e) => {
        setExam({ ...exam, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
        setExam({
            exam: "",
            subject: "",
            class: "",
            topic: "",
            date: "",
            time: ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddExam(exam);
        setOpenModal(false);
        resetForm();
    };

    return (
        <>
            <button
                className="flex items-center gap-1 bg-green-500 text-white cursor-pointer px-3 py-1 rounded"
                onClick={() => setOpenModal(true)}
            >
                <FaPlus /> New Exam
            </button>

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <ModalHeader>Add New Exam</ModalHeader>

                <ModalBody>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

                        <div>
                            <Label htmlFor="exam">Exam Name</Label>
                            <TextInput
                                id="exam"
                                name="exam"
                                placeholder="Exam Name"
                                value={exam.exam}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="subject">Subject</Label>
                            <TextInput
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                value={exam.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="class">Class</Label>
                            <TextInput
                                id="class"
                                name="class"
                                placeholder="Class"
                                value={exam.class}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="topic">Topic</Label>
                            <TextInput
                                id="topic"
                                name="topic"
                                placeholder="Topic Covered"
                                value={exam.topic}
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
                                value={exam.date}
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
                                value={exam.time}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-span-2 flex justify-end pt-4">
                            <Button type="submit" color="blue">Add Exam</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default AddExamModal;

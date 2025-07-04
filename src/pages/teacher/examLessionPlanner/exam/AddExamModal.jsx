import { Button, Modal, ModalBody, ModalHeader, Textarea, TextInput } from "flowbite-react";
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

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddExam(exam);
        setOpenModal(false);
        setExam({
            exam: "",
            subject: "",
            class: "",
            topic: "",
            date: "",
            time: ""
        });
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
                    <form onSubmit={handleSubmit} className="space-y-4">

                        <TextInput
                            name="exam"
                            placeholder="Exam Name"
                            value={exam.exam}
                            onChange={handleChange}
                            required
                        />

                        <TextInput
                            name="subject"
                            placeholder="Subject"
                            value={exam.subject}
                            onChange={handleChange}
                            required
                        />

                        <TextInput
                            name="class"
                            placeholder="Class"
                            value={exam.class}
                            onChange={handleChange}
                            required
                        />

                        <TextInput
                            name="topic"
                            placeholder="Topic"
                            value={exam.topic}
                            onChange={handleChange}
                            required
                        />

                        <TextInput
                            name="date"
                            type="date"
                            value={exam.date}
                            onChange={handleChange}
                            required
                        />

                        <TextInput
                            name="time"
                            type="time"
                            value={exam.time}
                            onChange={handleChange}
                            required
                        />

                        <Button type="submit" className="w-full">Add Exam</Button>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default AddExamModal;

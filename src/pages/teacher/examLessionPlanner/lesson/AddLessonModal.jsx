import { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { FaPlus } from "react-icons/fa";

const AddLessonModal = ({ handleAddLesson }) => {

    const [openModal, setOpenModal] = useState(false);
    const [lesson, setLesson] = useState({
        subject: "",
        class: "",
        topic: "",
        date: "",
        time: "",
        status: "Pending"
    });

    const handleChange = (e) => {
        setLesson({ ...lesson, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!lesson.subject || !lesson.class || !lesson.topic || !lesson.date || !lesson.time) {
            alert("Please fill all fields.");
            return;
        }
        handleAddLesson(lesson);
        setOpenModal(false);
        resetForm();
    };

    const resetForm = () => {
        setLesson({
            subject: "",
            class: "",
            topic: "",
            date: "",
            time: "",
            status: "Pending"
        });
    };

    return (
        <>
            <button
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded transition"
                onClick={() => setOpenModal(true)}
            >
                <FaPlus /> New Lesson
            </button>

            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <ModalHeader />
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Add New Lesson</h3>

                            <TextInput
                                name="subject"
                                placeholder="Subject Name"
                                value={lesson.subject}
                                onChange={handleChange}
                                required
                            />

                            <TextInput
                                name="class"
                                placeholder="Class Name"
                                value={lesson.class}
                                onChange={handleChange}
                                required
                            />

                            <TextInput
                                name="topic"
                                placeholder="Topic"
                                value={lesson.topic}
                                onChange={handleChange}
                                required
                            />

                            <TextInput
                                name="date"
                                type="date"
                                value={lesson.date}
                                onChange={handleChange}
                                required
                            />

                            <TextInput
                                name="time"
                                type="time"
                                value={lesson.time}
                                onChange={handleChange}
                                required
                            />

                            <div className="w-full pt-2">
                                <Button type="submit" className="w-full">Add Lesson</Button>
                            </div>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default AddLessonModal;

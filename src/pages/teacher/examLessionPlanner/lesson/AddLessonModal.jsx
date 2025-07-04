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
        try {
            handleAddLesson(lesson);  // Parent ko new lesson bhej rahe hain
            setOpenModal(false);
            setLesson({
                subject: "",
                class: "",
                topic: "",
                date: "",
                time: "",
                status: "Pending"
            });
        } catch (error) {
            console.error("Error Adding Lesson:", error);
        }
    };

    return (
        <>
            <button
                className="flex items-center gap-1 bg-green-500 text-white cursor-pointer px-3 py-1 rounded"
                onClick={() => setOpenModal(true)}
            >
                <FaPlus /> New Lesson
            </button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <ModalHeader />
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Lesson</h3>

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
                                placeholder="Time"
                                type="time"
                                value={lesson.time}
                                onChange={handleChange}
                                required
                            />

                            <div className="w-full">
                                <Button type="submit" className="cursor-pointer">Add Lesson</Button>
                            </div>

                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default AddLessonModal;

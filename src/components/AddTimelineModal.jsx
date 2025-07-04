import { Button, Label, Modal, ModalBody, ModalHeader, TextInput, Datepicker } from "flowbite-react";
import { useRef, useState } from "react";

const AddTimelineModal = ({ handleNewTimeline }) => {
    const [openModal, setOpenModal] = useState(false);
    const [newTimeline, setNewTimeline] = useState({
        title: "",
        date: "",
        time: ""
    });
    const titleInputRef = useRef(null);

    const handleChange = (e) => {
        setNewTimeline({ ...newTimeline, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        console.log(newTimeline)
        e.preventDefault();
        if (newTimeline.title && newTimeline.date && newTimeline.time) {
            handleNewTimeline({
                ...newTimeline,
                date: new Date(newTimeline.date) // string ko Date object me convert karo
            });
            setOpenModal(false);
            setNewTimeline({ title: "", date: "", time: "" }); // form reset
        }
    };

    return (
        <>
            <Button size="sm" onClick={() => setOpenModal(true)}>New Timeline</Button>
            <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={titleInputRef}>
                <ModalHeader />
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add New Timeline</h3>

                            <div>
                                <Label htmlFor="title">Timeline Title</Label>
                                <TextInput
                                    id="title"
                                    name="title"
                                    ref={titleInputRef}
                                    placeholder="Event Title"
                                    value={newTimeline.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <Label htmlFor="date">Timeline Date</Label>
                                <TextInput
                                    id="date"
                                    name="date"
                                    type="date"
                                    value={newTimeline.date}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div>
                                <Label htmlFor="time">Timeline Time</Label>
                                <TextInput
                                    id="time"
                                    name="time"
                                    type="time"
                                    placeholder="e.g. 10:00 - 11:00"
                                    value={newTimeline.time}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="w-full">
                                <Button type="submit">Add Timeline</Button>
                            </div>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default AddTimelineModal;

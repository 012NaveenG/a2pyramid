import { useState } from "react";
import { Modal, ModalHeader, ModalBody, TextInput, Label, Button } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";

const EditClass = ({ data, handlEditLecture }) => {
    const [openModal, setOpenModal] = useState(false);
    const [formData, setFormData] = useState(data);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        handlEditLecture(formData);  // Parent ko updated lecture bhejna
        setOpenModal(false);
    };

    return (
        <>
            <button onClick={() => setOpenModal(true)} className="w-8 h-8 hover:bg-slate-700 transition-all duration-75 ease-in rounded-full flex items-center justify-center cursor-pointer">
                <FaRegEdit className="font-bold text-xl text-blue-700" />
            </button>

            <Modal show={openModal} onClose={() => setOpenModal(false)} popup>
                <ModalHeader>Edit Class Details</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleEdit} className="space-y-4">

                        <div>
                            <Label htmlFor="subject">Subject Name</Label>
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
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="status">Status</Label>
                            <TextInput
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="duration">Duration (Minutes)</Label>
                            <TextInput
                                id="duration"
                                name="duration"
                                type="number"
                                value={formData.duration}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="location">Location</Label>
                            <TextInput
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="attendanceCount">Attendance Count</Label>
                            <TextInput
                                id="attendanceCount"
                                name="attendanceCount"
                                type="number"
                                value={formData.attendanceCount}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <Label htmlFor="cancelReason">Cancellation Reason</Label>
                            <TextInput
                                id="cancelReason"
                                name="cancelReason"
                                value={formData.cancelReason}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex justify-end mt-4">
                            <Button type="submit">Update Class</Button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
};

export default EditClass;

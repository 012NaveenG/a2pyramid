import { Button, Label, Modal, ModalBody, ModalHeader, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const EditClassModal = ({ data, handleEditClass }) => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    handleEditClass(formData);
    setOpenModal(false);
  };

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="w-8 h-8 hover:bg-slate-700 transition-all duration-75 ease-in rounded-full flex items-center justify-center cursor-pointer"
      >
        <FaRegEdit className="text-xl text-blue-700" />
      </button>

      <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg" popup>
        <ModalHeader>Edit Class Details</ModalHeader>
        <ModalBody>
          <form onSubmit={handleEdit}>
            <div className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="class">Class Name</Label>
                <TextInput
                  name="class"
                  id="class"
                  value={formData.class}
                  onChange={handleChange}
                  placeholder="Class Name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="classTeacher">Class Teacher</Label>
                <TextInput
                  name="classTeacher"
                  id="classTeacher"
                  value={formData.classTeacher}
                  onChange={handleChange}
                  placeholder="Class Teacher Name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <TextInput
                  name="phone"
                  id="phone"
                  minLength={10}
                  maxLength={10}
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Class Teacher Contact Number"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <TextInput
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Class Teacher Email"
                  required
                />
              </div>

              <div>
                <Label htmlFor="totalStudents">Total Students</Label>
                <TextInput
                  name="totalStudents"
                  id="totalStudents"
                  type="number"
                  value={formData.totalStudents}
                  onChange={handleChange}
                  placeholder="Total Students"
                  required
                />
              </div>

              <div>
                <Label htmlFor="totalFaculties">Total Faculties</Label>
                <TextInput
                  name="totalFaculties"
                  id="totalFaculties"
                  type="number"
                  value={formData.totalFaculties}
                  onChange={handleChange}
                  placeholder="Total Faculties"
                  required
                />
              </div>
            </div>

            <div className="w-full mt-6 flex justify-end">
              <Button type="submit">Update Class</Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EditClassModal;

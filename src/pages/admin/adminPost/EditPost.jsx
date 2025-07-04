import { Button, Modal, ModalBody, ModalHeader, Textarea, TextInput } from "flowbite-react";
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";

const EditPost = ({ data,handleEditPost }) => {

    const [openModal, setOpenModal] = useState(false);
    const [post, setPost] = useState(data)
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            handleEditPost(post)
            setOpenModal(false)
            setPost({
                title: "",
                content: ""
            })
        } catch (error) {

        }
    }
    return (
        <>
            <button onClick={() => setOpenModal(true)} className="w-8 h-8  transition-all duration-75 ease-in cursor-pointer hover:bg-slate-700 rounded-full flex items-center justify-center">
                <FaRegEdit className="text-blue-600" />
            </button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <ModalHeader />
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Edit Post</h3>
                            <div>
                                <TextInput

                                    id="email"
                                    name="title"
                                    placeholder="Post Title"
                                    value={post.title}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Textarea
                                    value={post.content}
                                    name="content"
                                    onChange={handleChange}
                                    placeholder="Post Content..."
                                    required rows={4} />
                            </div>

                            <div className="w-full">
                                <Button type="submit" className="cursor-pointer">Edit</Button>
                            </div>

                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default EditPost

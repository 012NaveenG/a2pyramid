import { Button, Modal, ModalBody, ModalHeader, Textarea, TextInput } from "flowbite-react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

const AddPostModal = ({ handleAddPost }) => {

    const [openModal, setOpenModal] = useState(false);
    const [post, setPost] = useState({
        title: "",
        content: ""
    })
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            handleAddPost(post)
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
            <button
                className="flex items-center gap-1 bg-green-500 text-white cursor-pointer px-3 py-1 rounded"
                onClick={() => setOpenModal(true)}
            >
                <FaPlus /> New Post
            </button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <ModalHeader />
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add Post</h3>
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
                                <Button type="submit" className="cursor-pointer">Publish</Button>
                            </div>

                        </div>
                    </form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default AddPostModal



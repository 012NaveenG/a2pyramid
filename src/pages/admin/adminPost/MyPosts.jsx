import { useState } from "react";
import { FaTrash } from "react-icons/fa";

import AddPostModal from "./AddPostModal";
import EditPost from "./EditPost";
import DeleteModal from "../../../components/DeleteModal";

const initialPosts = [
    { id: 1, title: "Holiday Announcement", content: "School will be closed on Friday due to maintenance.", date: "2025-06-30" },
    { id: 2, title: "Exam Schedule Update", content: "Math exam shifted to next Monday.", date: "2025-07-02" },
];

const MyPosts = () => {
    const [posts, setPosts] = useState(initialPosts);

    const handleAddPost = (data) => {
        try {
            if (!data.title || !data.content) return;
            const newPost = {
                id: Date.now(),
                title: data.title,
                content: data.content,
                date: new Date().toISOString().split("T")[0],
            };
            setPosts([newPost, ...posts]);
            console.log(data)
        } catch (error) {

        }
    };

    const handleEditPost = (updatedData) => {
        setPosts(
            posts.map((post) =>
                post.id === updatedData.id ? { ...post, ...updatedData } : post
            )
        );
    };

    const handleDelete = (id) => {
        setPosts(posts.filter((post) => post.id !== id));
    };

    return (
        <div className="p-5">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold dark:text-white">My Posts</h1>
                <AddPostModal handleAddPost={handleAddPost} />
            </div>

            {/* Posts List */}
            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded shadow">
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-lg font-semibold dark:text-white">{post.title}</h2>
                            <span className="text-sm dark:text-slate-400">{post.date}</span>
                        </div>
                        <p className="dark:text-slate-300 mb-2">{post.content}</p>
                        <div className="flex gap-2">
                            <EditPost data={post} handleEditPost={handleEditPost} />
                            <DeleteModal id={post.id} handleDelete={handleDelete} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyPosts;

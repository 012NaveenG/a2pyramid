import { useEffect, useState } from "react";
import { getSession } from "../api/users.js";
import { fetchPosts, addComment, likeComment, deletePost, createPost } from "../api/posts.js";
import { FaHeart } from "react-icons/fa";
import { Button, TextInput } from "flowbite-react";
import DeleteModal from "./DeleteModal.jsx";
import AddPostModal from "./AddPostModal.jsx";

const PostFeed = () => {
    const [posts, setPosts] = useState([]);
    const [commentInputs, setCommentInputs] = useState({});

    const user = getSession();

    useEffect(() => {
        fetchPosts().then(setPosts);
    }, []);

    const handleAddPost = async (data) => {
        if (!data.title || !data.content) return;
        await createPost({
            title: data.title,
            content: data.content,
            date: new Date().toISOString().split("T")[0],
        });
        fetchPosts().then(setPosts);
    };

    const handleAddComment = async (postId) => {
        const text = commentInputs[postId];
        if (!text) return alert("Please enter a comment");

        await addComment(postId, text);
        fetchPosts().then(setPosts);
        setCommentInputs({ ...commentInputs, [postId]: "" });
    };

    const handleDeletePost = (id) => {
        deletePost(id);
        setPosts(posts.filter((post) => post.id !== id));
    };

    const handleLikeComment = async (postId, commentId) => {
        await likeComment(postId, commentId);
        fetchPosts().then(setPosts);
    };

    return (
        <div className="space-y-4">
            {user.role === "admin" && <AddPostModal handleAddPost={handleAddPost} />}
            {posts.length === 0 && <p className="text-gray-500 text-center">No posts yet.</p>}

            {posts.map((post) => (
                <div
                    key={post.id}
                    className="p-4 bg-slate-100 dark:bg-slate-900/50 rounded shadow flex flex-col gap-3"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-2">
                        <h2 className="text-lg font-semibold dark:text-white">{post.title}</h2>
                        <span className="text-sm dark:text-slate-400">{post.date}</span>
                    </div>

                    <p className="dark:text-slate-300 mb-2 break-words">{post.content}</p>

                    <h3 className="font-medium text-slate-600 dark:text-slate-300">Comments:</h3>

                    <div className="mt-2 space-y-2 max-h-32 overflow-y-auto">
                        {post.comments.length === 0 && (
                            <p className="text-sm text-gray-400">No comments yet.</p>
                        )}

                        {post.comments.map((comment) => (
                            <div
                                key={comment.id}
                                className="flex justify-between items-center p-2 bg-white dark:bg-slate-800 rounded"
                            >
                                <p className="text-sm dark:text-slate-200 break-words">{comment.text}</p>
                                <button
                                    onClick={() => handleLikeComment(post.id, comment.id)}
                                    className="flex items-center gap-1 text-red-600"
                                >
                                    <FaHeart /> {comment.likes}
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-between mt-3 gap-2">
                        <div className="flex w-full gap-2">
                            <TextInput
                                sizing="sm"
                                type="text"
                                placeholder="Add a comment..."
                                value={commentInputs[post.id] || ""}
                                onChange={(e) =>
                                    setCommentInputs({ ...commentInputs, [post.id]: e.target.value })
                                }
                                className="w-full"
                            />
                            <Button
                                size="xs"
                                onClick={() => handleAddComment(post.id)}
                                className="bg-blue-500 text-white"
                            >
                                Comment
                            </Button>
                        </div>

                        {user.role === "admin" && (
                            <DeleteModal id={post.id} handleDelete={handleDeletePost} />
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostFeed;

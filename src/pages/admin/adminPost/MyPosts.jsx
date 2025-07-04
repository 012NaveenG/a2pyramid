
import PostFeed from "../../../components/PostFeed.jsx";


const MyPosts = () => {

    return (
        <div className="p-5 mt-10">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold dark:text-white">My Posts</h1>
            </div>

            <PostFeed />
        </div>
    );
};

export default MyPosts;

import React, { useState } from 'react';
import Sidebar from './Sidebar';

export default function RedditForum() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    const handlePostChange = (event) => {
        setNewPost(event.target.value);
    };

    const handlePostSubmit = (event) => {
        event.preventDefault();
        if (newPost.trim() !== '') {
            const newPostObj = {
                text: newPost,
                comments: [],
            };
            setPosts([newPostObj, ...posts]);
            setNewPost('');
        }
    };

    const handleCommentChange = (event, postIndex) => {
        const updatedPosts = [...posts];
        updatedPosts[postIndex].newComment = event.target.value;
        setPosts(updatedPosts);
    };

    const handleCommentSubmit = (event, postIndex) => {
        event.preventDefault();
        const updatedPosts = [...posts];
        if (updatedPosts[postIndex].newComment && updatedPosts[postIndex].newComment.trim() !== '') {
            updatedPosts[postIndex].comments.push(updatedPosts[postIndex].newComment);
            updatedPosts[postIndex].newComment = '';
            setPosts(updatedPosts);
        }
    };

    return (
        <div className="h-screen w-full">
            <Sidebar />
            <div className="flex justify-center items-center h-full">
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg px-6 py-4 w-full max-w-md">
                    {posts.map((post, index) => (
                        <div key={index} className="border-b border-gray-300 dark:border-gray-700 py-4">
                            <p className="text-gray-600 dark:text-gray-300">{post.text}</p>
                            <div className="mt-4">
                                {post.comments.map((comment, commentIndex) => (
                                    <p key={commentIndex} className="text-gray-600 dark:text-gray-300 mb-2">
                                        {comment}
                                    </p>
                                ))}
                                <form
                                    onSubmit={(event) => handleCommentSubmit(event, index)}
                                    className="flex mt-2"
                                >
                                    <input
                                        type="text"
                                        value={post.newComment || ''}
                                        onChange={(event) => handleCommentChange(event, index)}
                                        className="border border-gray-300 dark:border-gray-700 rounded-l-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Add a comment..."
                                    />
                                    <button
                                        type="submit"
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
                                    >
                                        Comment
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="fixed w-full bg-yellow-200 bottom-0 right-0 bg-white dark:bg-gray-800 shadow-lg px-6 py-4 max-w-md">
                <form onSubmit={handlePostSubmit} className="mb-4">
                    <textarea
                        value={newPost}
                        onChange={handlePostChange}
                        className="border border-gray-300 dark:border-gray-700 rounded-md py-2 px-4 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="3"
                        placeholder="Create a post..."
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-2 float-right"
                    >
                        Post
                    </button>
                </form>
            </div>
        </div>
    );
}

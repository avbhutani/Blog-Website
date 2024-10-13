// PostsList.jsx
import React, { useEffect, useState } from 'react';
import Post from './Post';

const PostsList = () => {
    const [posts, setPosts] = useState([]); // State to store posts
    const [loading, setLoading] = useState(true); // State to handle loading state

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:4000/allPosts'); // Replace with your API URL
                const data = await response.json();
                setPosts(data); // Store the fetched posts in state
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchPosts();
    }, []); // Empty dependency array means this runs once when the component mounts

    if (loading) {
        return <div>Loading...</div>; // Show a loading message while fetching
    }

    return (
        <div className="posts-list">
            {posts.length ?(
            posts.map((post) => (
                <Post key={post._id} post={post} /> // Map over posts and render Post component
            )))
        : <h3>You are All Catched Up!</h3>
        }
        </div>
    );
};

export default PostsList;

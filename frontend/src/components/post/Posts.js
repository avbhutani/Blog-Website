// PostsList.jsx
import React, { useEffect, useState } from 'react';
import Post from './Post';
import ExpandedPost from '../../Pages/expandedPost/ExpandedPost';
import { useNavigate } from 'react-router-dom';

const PostsList = () => {
    const [posts, setPosts] = useState([]); // State to store posts
    const navigate = useNavigate()

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:4000/allPosts');
                const data = await response.json();
                setPosts(data); // Store the fetched posts in state
            } catch (error) {
                console.error('Error fetching posts:', error);
            } 
        };

        fetchPosts();
    }, []); // Empty dependency array means this runs once when the component mounts


    const handlePostClick = async (postId)=> {
        navigate(`/post/${postId}`)
    }
    
    return (
        <div className="posts-list">
            {posts.length ?(
            posts.map((post) => (
                <Post key={post._id} post={post} onClick={()=> handlePostClick(post._id)} /> // Map over posts and render Post component
            )))
        : <h3>You are All Catched Up!</h3>
        }
{/* 
{expandedPost && <ExpandedPost post={expandedPost} />} */}

        </div>
    );
};

export default PostsList;

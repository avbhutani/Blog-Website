import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import './ExpandedPost.css'
import { useState,useEffect } from 'react'

export default function ExpandedPost() {
    const {id} = useParams()
    const [post,setPost] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:4000/users/posts/${id}`); // Fetch post by ID
                const data = await response.json();
                console.log('Check here')
                console.log(data)
                setPost(data); // Set the post data in state
            } catch (error) {
                console.error('Error fetching post:', error);
            } 
        };

        fetchPost();
    }, [id]);

return (
    <>
        <Header />
        {post?(<div className="expanded-post">
        <h1>{post.title}</h1>
        <hr/>
        <h2>~ {post.author}</h2>
        <p>{post.content}</p>
        </div>):(<h1>No Post here.</h1>)}
    </>
)
}
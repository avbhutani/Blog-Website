import axios from "axios";
import Header from "../components/Header";
import { useState } from "react";
import './CreatePostPage.css'

export default function CreatePostPage() {
    const [img,setImg] = useState('')
    const [content,setContent] = useState('')
    async function handlePostCreation(event) {
        event.preventDefault()
        const res = await axios.post('http://localhost:4000/user/createPost',{
            withCredentials:true
        })

        console.log(res);
    }
    return (
        <>
            <Header />
            <form className="create-post-form"  onSubmit={handlePostCreation}>
            <h1>Create New Post!</h1>
                <input type="text" className="new-post-title" placeholder="Title" spellCheck="true" autoCapitalize="on" required />
                <input type="file" className="new-post-img-upload" />
                <textarea className="new-post-content" spellCheck="true" placeholder="Enter Content" required />
                <button className="new-post-button">Create Post</button>
            </form>
        </>
    )
}
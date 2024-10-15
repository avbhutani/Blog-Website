import axios from "axios";
import Header from "../../components/header/Header";
import { useState } from "react";
import './CreatePostPage.css'
import { useNavigate } from "react-router-dom";

export default function CreatePostPage() {
    const [img,setImg] = useState('')
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [message,setMessage] = useState('')
    const [charRemaining,setCharRemaining] = useState(3000)
    const navigate = useNavigate()
    async function handlePostCreation(event) {
        event.preventDefault()
        try {
            const res = await axios.post('http://localhost:4000/user/createNewPost',{
            title,
            img,
            content,
            withCredentials:true})
            setMessage(res.data.message)
            navigate('/')
        }catch(error) {
            console.log(error)
        }
    }
    return (
        <>
            <Header />
            <form className="create-post-form"  onSubmit={handlePostCreation}>
            <h1>Create New Post!</h1>
                <input type="text"  onChange={(ev)=>setTitle(ev.target.value)} className="new-post-title" placeholder="Title" spellCheck="true" autoCapitalize="on" required />
                <input type="file" className="new-post-img-upload" />
                <textarea maxLength={3000} className="new-post-content"  onChange={(ev)=>{setContent(ev.target.value)
                    setCharRemaining(2999 - content.length)
                }} spellCheck="true" placeholder="Enter Content" required />
                <h5>{charRemaining}</h5>
                <button className="new-post-button">Create Post</button>
                <h5>{message}</h5>
            </form>
        </>
    )
}
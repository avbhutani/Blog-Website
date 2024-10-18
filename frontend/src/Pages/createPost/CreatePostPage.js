import axios from "axios";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import './CreatePostPage.css'
import { useNavigate } from "react-router-dom";

export default function CreatePostPage() {
    const [img,setImg] = useState('')
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [message,setMessage] = useState('')
    const [charRemaining,setCharRemaining] = useState(3000)
    const [file,setFile] = useState()
    const navigate = useNavigate()
    const formData = new FormData()

    useEffect(()=> {
        if(file) {
            console.log(file)
        }
    },[file])

    async function handlePostCreation(event) {
        event.preventDefault()
        console.log(event.target)
        formData.append('file',file)
        try {
            const uploadedImage = await axios.post('http://localhost:4000/user/posts/upload/image',formData)
            console.log('CHeck here')
            console.log(uploadedImage)
            const res = await axios.post('http://localhost:4000/user/createNewPost',{
            title,
            img:uploadedImage.data,
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
            <form className="create-post-form" encType="multipart/form-data" onSubmit={handlePostCreation}>
            <h1>Create New Post!</h1>
                <input type="text"  onChange={(ev)=>setTitle(ev.target.value)} className="new-post-title" placeholder="Title" spellCheck="true" autoCapitalize="on" required />
                <input type="file" name="file" className="new-post-img-upload" onChange={(e)=> setFile(e.target.files[0])} />
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
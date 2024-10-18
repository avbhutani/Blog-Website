import Header from "../../components/header/Header"
import { useState,useEffect } from "react";
import '../createPost/CreatePostPage.css'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditPost(post) {
    const {id} = useParams()
    const [img,setImg] = useState('')
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [message,setMessage] = useState('')
    const [charRemaining,setCharRemaining] = useState(3000)
    const navigate = useNavigate()
    const [file,setFile] = useState()
    const formData = new FormData();
    useEffect(()=> {
        async function fixPreContent(){
        try{
            const postContent = await axios.get(`http://localhost:4000/users/posts/${id}`)
            setContent(postContent.data.content)
            setTitle(postContent.data.title)
            setCharRemaining(3000 - postContent.data.content.length)
        }
        catch(error) {
            console.log('fetch error' + error)
        }
        
    }
        fixPreContent()
    },[id])

    useEffect(() => {
        if (file) {
            // alert(`File ${file.name} Updated Successfully!`)
            console.log("File updated:", file);  // This will trigger when file is set
        }
    }, [file]);

    async function handlePostUpdation(event) {
        event.preventDefault()
        
        formData.append("file", file);  // Append the file  // Append the file

    
        
        try {
            const uploadImage = await axios.post('http://localhost:4000/user/posts/upload/image', formData);
            console.log('Checkc here')
            console.log(uploadImage)
            const res = await axios.post(`http://localhost:4000/user/posts/update/${id}`,{
            title,
            img:uploadImage.data,
            content,
            withCredentials:true
        })
            setMessage(res.data.message)
            navigate('/')
        }catch(error) {
            console.log(error)
        }
    }
    return (
        <>
            <Header />
            <form className="create-post-form" encType="multipart/form-data"  onSubmit={handlePostUpdation}>
            <h1>Edit Post!</h1>
                <input type="text" value={title} onChange={(ev)=>setTitle(ev.target.value)} className="new-post-title" placeholder="Title" spellCheck="true" autoCapitalize="on" required />
                <input type="file" id="file" name="file" className="new-post-img-upload" onChange={(e)=> {setFile(e.target.files[0])}} />
                <textarea maxLength={3000} className="new-post-content"  onChange={(ev)=>{setContent(ev.target.value)
                    setCharRemaining(2999 - content.length)
                }} spellCheck="true" value={content} placeholder="Enter Content" required />
                <h5>{charRemaining}</h5>
                <button className="new-post-button">Update Post</button>
                <h5>{message}</h5>
            </form>
        </>
    )
}
import { useEffect, useState,react } from "react"
import CheckAccess from "../utils/CheckAccess"
import Post from "./Post"
import axios from "axios"
export default function UserPosts() {
    const [userPosts,setUserPosts] = useState([])

    useEffect(()=> {
        const fetchUserPosts = async ()=> {
            try{
                const posts = await axios.get('http://localhost:4000/user/posts',{
                withCredentials:true
            })
            setUserPosts(posts.data)
            console.log(posts.data)
        }
            catch(error) {
                console.log('Error Fetching User Posts')
            }
        }
        fetchUserPosts()
    },[])

    return (
        <>
            {
            userPosts.length ?
            (userPosts.map((post) => (
                <Post key={post._id} post={post} />
            ))):
            (<h1>No Posts to show</h1>)
        }
        </>
    )
}
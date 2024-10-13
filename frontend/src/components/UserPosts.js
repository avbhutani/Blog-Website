import { useEffect, useState } from "react"
import CheckAccess from "../utils/CheckAccess"
import Post from "./Post"
import axios from "axios"
export default function UserPosts() {
    const user = CheckAccess('/login')
    const [userPosts,setUserPosts] = useState([])

    useEffect(()=> {
        const fetchUserPosts = async ()=> {
            try{
                const posts = await axios.get('http://localhost:4000/getUserPost',{
                withCredentials:true
            })
            // setUserPosts(posts)
            console.log(posts)
        }
            catch(error) {
                console.log('Error Fetching User Posts')
            }
        }
        fetchUserPosts()
        console.log('Check Posts here')
        console.log(userPosts)
    },[])

    return (
        <>
            {userPosts}
        </>
    )
}
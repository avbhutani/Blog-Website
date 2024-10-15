import { useEffect } from 'react';
import Header from '../../components/header/Header'
import CheckAccess from "../../utils/CheckAccess";
import { useNavigate } from 'react-router-dom';
import Post from '../../components/post/Post';
import PostsList from '../../components/post/Posts';
export default function HomePage(props) {
    const user = CheckAccess('/login')
    
    return (
        <>
        <Header />
        {user?<h1>Welcome Home, {user.username}</h1>:<h1>Unauthorized</h1>}
        <PostsList />
        </>
    )
}
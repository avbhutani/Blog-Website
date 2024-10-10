import { useContext, useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Header from '../components/Header'
import CheckAccess from "../utils/CheckAccess";
import { UserContext } from "../contexts/UserContext";
export default function HomePage(props) {
    const user = useContext(UserContext)
    const navigate = useNavigate()
    useEffect(()=> {
        if(!user) {
            navigate('/login')
        }
    },[user])
    console.log(user)
    return (
        <>
        <Header />
        <h1>Welcome Home, $ {user.username} </h1>
        </>
    )
}
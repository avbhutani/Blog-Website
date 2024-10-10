import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import Header from '../components/Header'
import CheckAccess from "../utils/CheckAccess";
export default function HomePage(props) {
    const username = CheckAccess('/login')
    return (
        <>
        <Header />
        <h1>Welcome Home, {username} </h1>
        </>
    )
}
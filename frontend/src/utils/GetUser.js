import { useEffect,useState } from "react";
import axios from "axios";

const GetUser = ()=> {
    
    const [user,setUser] = useState(null)
    useEffect(()=> {
        async function getUsername() {
        try{const response = await axios.get('http://localhost:4000/profile',{
            withCredentials:true
        })
        setUser(response.data)
        
        }catch(error) {
            console.log(error)
        }
    }
    getUsername()
    },[])
    return user
}

export default GetUser
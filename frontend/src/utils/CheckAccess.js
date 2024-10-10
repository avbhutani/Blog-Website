import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CheckAccess = (redirectUrl) => {
    const [username, setUsername] = useState('');
    // const [id,setId] = useState('')
    // const [user,setUser] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        async function checkUserName() {
            try {
                const res = await axios.get('http://localhost:4000/profile', {
                    withCredentials: true, // Ensures cookies are sent with the request
                });
                console.log(res);
                setUsername(res.data.username)
                // setUser(res.data)
            } catch (error) {
                navigate(redirectUrl);  // Use the dynamic redirect URL passed in as an argument
                console.log(error);
            }
        }

        checkUserName();
    }, [redirectUrl]);

    return username // Return username so it can be used in components
};

export default CheckAccess;

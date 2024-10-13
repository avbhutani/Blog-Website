import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// The withCredentials attribute has to be used because, on the server
// the httpOnly flag is enabled, so the frontend cannot access the cookie directly
// thereby preventing the common site scripting attacks.
// The attribute sends the cookies directly without even accessing it.

const CheckAccess = (redirectUrl) => {
    const [user, setUser] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if(user) return user;
        async function checkUserName() {
            try {
                const res = await axios.get('http://localhost:4000/profile', {
                    withCredentials: true, 
                });
                setUser(res.data)
            } catch (error) {
                if(redirectUrl)
                    navigate(redirectUrl);
            }
        }
        checkUserName();
    }, [redirectUrl]);

    return user 
};

export default CheckAccess;

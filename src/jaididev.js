import { useState, useEffect } from "react";
import axios from 'axios';
import { getCLS, getFID, getLCP } from 'web-vitals';

const GetUsers = ()=>{
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    useEffect(()=>{
        const handle = async()=>{
            try{
                const respense = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsers(respense.data)
            }
            catch(err){
                setError(err)
            }
        }
        handle();
    }, [])
    if(error){
        return(
            <p>err: {error}</p>
        )
    }
    return(
        <div>
            <ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default GetUsers
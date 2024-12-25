import { useState, useEffect } from "react";

const Fet = ()=>{
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(respense => respense.json)
        .then(data => setUsers(data))
        .catch(error =>{
            setError(error)
        })
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
export default Fet;
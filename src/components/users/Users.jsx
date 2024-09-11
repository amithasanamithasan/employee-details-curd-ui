
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
       const lodarusers= useLoaderData();
       const [users, setUsers]=useState(lodarusers)

    const handeldeleted= _id =>{


fetch(`http://localhost:5000/user/${_id}`,{
    method:'DELETE'
})
.then(res=>res.json())
.then(data=> {
    console.log(data);
    if(data.deletedCount >0){
        alert('user DELETED successfully');

        const remainig= users.filter(user=> user._id !== _id)
        setUsers(remainig);

    }
})

    }
 
    return (
        <div>
            <h1>Hello</h1>
            <p>{users.length}</p>
           
<div>
    {
        users.map(user=> <p key={user._id} >
            {user.name}:{user.email} :{user.phone} 
            :{user.location}:{user.address}
        <Link to={`/update/${user._id}`}>
        <button > Update</button> 
        </Link> 
          
            <br />
            <button onClick={()=>handeldeleted(user._id)} type="submit"> X</button></p> )
    }
</div>
        </div>
    );
};

export default Users;
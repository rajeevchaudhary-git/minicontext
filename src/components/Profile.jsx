import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext);
  
    
    if(!user){
        return <h2>Provide login Credentials</h2>
    }
    else{
        return <h1>{user.username}</h1>
    }

  
}

export default Profile

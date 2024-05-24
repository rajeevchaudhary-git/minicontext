import {useContext,useState} from 'react';
import UserContext from '../context/UserContext';


function Login() {
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const {setuser} = useContext(UserContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        setuser({ username, password });
    }
  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e)=>setusername(e.target.value)} type='text' placeholder='username'/>
      <input value={password} onChange={(e)=>setpassword(e.target.value)} type='text' placeholder='password'/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default Login

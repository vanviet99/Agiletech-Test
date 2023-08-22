import React, { useState } from 'react'
import './sign.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Signin() {
    const nav = useNavigate()
    const [username, setUsername] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username} submitted.`);
        axios.post('https://test-react.agiletech.vn/auth/login',{username:username})
    .then((res)=>{
        console.log(res)
        localStorage.setItem('accessToken',res.data.accessToken)
        localStorage.setItem('refreshToken',res.data.refreshToken)
        nav('/')
    })
    .catch((err)=>{
        console.log(err)
    })
      };
  return (
        <div className='sign'>
        <form className="center-form" onSubmit={handleSubmit}>
      <p>Sign In</p>
      <label>Username</label>
    <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button type='submit'>Sign In</button>
    </form>
    <svg xmlns="http://www.w3.org/2000/svg" width="66" height="41" viewBox="0 0 66 41" fill="none" className='halinh'>
        <rect y="17.2877" width="26.8156" height="23.0502" rx="11.5251" fill="#9C69E2"/>
        <rect x="38.8828" width="26.8156" height="40.3378" rx="13.4078" fill="#F063B8"/>
    </svg>
        </div>
  )
}

export default Signin
import React, { useEffect, useState } from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
  const nav = useNavigate();
  
  const Signin = () => {
    nav('/login');
  };
  
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    setUser(accessToken); 
  }, []);
  
  const profile =()=>{
    nav('/profile')
  }
  const logout = ()=>{
    const accessToken = localStorage.getItem('accessToken');
    axios.delete('https://test-react.agiletech.vn/auth/logout', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
      .then(response => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        nav('/login')
      })
      .catch(error => {
        console.error('Logout failed', error);
      });
  }
  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken')
    const accessToken = localStorage.getItem('accessToken');
   axios.post('https://test-react.agiletech.vn/auth/refresh-token',{refreshToken:refreshToken},{
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
   })
   .then((res)=>{
    console.log(res)
   })
   .catch((err)=>{
    console.log(err)
   })
  }, [])
  

  return (
    <div>
      <div className="menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="36" viewBox="0 0 49 36" fill="none">
          <rect y="15.8323" width="19.8758" height="19.8758" rx="9.93789" fill="#9C69E2"/>
          <rect x="28.8203" y="0.925446" width="19.8758" height="34.7826" rx="9.93789" fill="#F063B8"/>
        </svg>
        {user ? <div className='menu_btn'>
          <button className='menu_button' onClick={profile}>profile</button>
          <button className='menu_button' onClick={logout}>logout</button>
          </div> : <button className='menu_button' onClick={Signin}>Signin</button>}
      </div>
    </div>
  );
}

export default Header;

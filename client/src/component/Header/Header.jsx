import React from 'react'
import './header.css'
function Header() {
  return (
    <div>
      <div className="menu">
       <svg xmlns="http://www.w3.org/2000/svg" width="49" height="36" viewBox="0 0 49 36" fill="none">
          <rect y="15.8323" width="19.8758" height="19.8758" rx="9.93789" fill="#9C69E2"/>
          <rect x="28.8203" y="0.925446" width="19.8758" height="34.7826" rx="9.93789" fill="#F063B8"/>
        </svg>
        <button className='menu_button'>Sign in</button>
      </div>
    </div>
  )
}

export default Header
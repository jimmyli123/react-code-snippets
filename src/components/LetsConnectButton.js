import React from 'react'
import './LetsConnectButton.css';

const LetsConnectButton = () => {
  return (
    <div>
      <span className="navbar-text">
          <button className="vvd" onClick={()=>console.log('connect')}>
            <span>Let's Connect
            </span>
          </button>
      </span>
    </div>
  )
}

export default LetsConnectButton

import React, { useState } from 'react'
import './LoginSingUp.css'

import user_icon from '../Assets/account.png';
import email_icon from '../Assets/mail.png';
import password_icon from '../Assets/password.png';

const LoginSingUP = () => {
    const[action,setAction]=useState("Login");

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==='Login'?<div></div>:
                <div className="input">
                <img className='icon' src={user_icon} alt="" />
                <input type="text" placeholder="Full Name"/>
                </div>
            }
            
            <div className="input">
                <img className='icon' src={email_icon} alt="" />
                <input type="email" placeholder="Email" />
            </div>
            <div className="input">
                <img className='icon' src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==='Sign Up'?<div></div>:
        <div className="forgot-pass">Forgot Password ? <span className='spans'>Click here</span></div>
        }
        
        <div className="submit-con">
            <div className={action==='Login'?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                Sign Up
            </div>
            <div className={action==='Sign Up'?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                Login
            </div>
        </div>
    </div>
  )
}

export default LoginSingUP;
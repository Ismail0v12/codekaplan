import React, {useState} from 'react';
import './login.scss';
import UserIcon from "../../assets/icons/user-icon";
import LockIcon from "../../assets/icons/lock-icon";
import EyeCrossedIcon from "../../assets/icons/eye-crossed-icon";
import googleIcon from '../../assets/icons/google-icon.png';
import {Link} from "react-router-dom";

function Login() {
  const [changeType, setChangeType] = useState(false);
  return (
    <div className="login">
      <h4 className="auth-layout__subtitle">Welcome</h4>
      <h2 className="title auth-layout__title">Log in page</h2>
      <form className="auth-layout__form">
        <label htmlFor="username">
          <h5>Login</h5>
          <input type="text" id="username" name="username" placeholder="Email or username"/>
          <span><UserIcon/></span>
        </label>
        <label className="last__child" htmlFor="password">
          <h5>Password</h5>
          <input type={changeType ? "text" : "password"} id="password" name="username" placeholder="Password "/>
          <span><LockIcon/></span>
          <i onClick={() => setChangeType(d => !d)}><EyeCrossedIcon/></i>
        </label>
        <button className="button-filled auth-layout__button" type="submit">Log In</button>
      </form>
      <button className="auth-layout__google">
        <img src={googleIcon} alt="CodeKaplan"/>
        <span>Log in google account</span>
      </button>
      <div className="auth-layout__question">
        <Link to="/register">I dont have an account? <span>Register</span></Link>
      </div>
    </div>
  );
}

export default Login;
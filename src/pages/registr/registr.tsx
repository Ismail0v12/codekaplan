import React, {useState} from 'react';
import UserIcon from "../../assets/icons/user-icon";
import LockIcon from "../../assets/icons/lock-icon";
import EyeCrossedIcon from "../../assets/icons/eye-crossed-icon";
import googleIcon from '../../assets/icons/google-icon.png';
import {Link} from "react-router-dom";

function Registr() {
  const [changeType, setChangeType] = useState(false);

  return (
    <div className="register" style={{width: "100%"}}>
      <h4 className="auth-layout__subtitle">Welcome</h4>
      <h2 className="title auth-layout__title">Register page</h2>
      <form className="auth-layout__form">
        <label htmlFor="username">
          <h5>Email or username</h5>
          <input type="text" id="username" name="username" placeholder="Email or username"/>
          <span><UserIcon/></span>
        </label>
        <label htmlFor="password">
          <h5>Password</h5>
          <input type={changeType ? "text" : "password"} id="password" name="username" placeholder="Password "/>
          <span><LockIcon/></span>
          <i onClick={() => setChangeType(d => !d)}><EyeCrossedIcon/></i>
        </label>
        <label className="last__child" htmlFor="password">
          <h5>Confirm Password</h5>
          <input type={changeType ? "text" : "password"} id="password" name="username" placeholder="Confirm Password"/>
          <span><LockIcon/></span>
          <i onClick={() => setChangeType(d => !d)}><EyeCrossedIcon/></i>
        </label>
        <button className="button-filled auth-layout__button" type="submit">Register</button>
      </form>
      <button className="auth-layout__google">
        <img src={googleIcon} alt="CodeKaplan"/>
        <span>Register google account</span>
      </button>
      <div className="auth-layout__question">
        <Link to="/login">I have an account? <span>Log In</span></Link>
      </div>
    </div>
  );
}

export default Registr;
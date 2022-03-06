import React from 'react';
import {Link} from "react-router-dom";
import UserIcon from "../../assets/icons/user-icon";

function NavigationButtons() {
  return (
    <div className="header__buttons">
      <Link to='/register' className="button-filled">
        Apply now
      </Link>
      <Link to='/login' className="button">
        <UserIcon/> Log in
      </Link>

    </div>
  );
}

export default NavigationButtons;
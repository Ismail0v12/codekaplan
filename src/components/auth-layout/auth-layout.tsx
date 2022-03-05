import React from 'react';
import {Outlet} from "react-router";
import './auth-layout.scss';
import WhiteLogo from "../../assets/logo/white-logo";
import {Link} from "react-router-dom";
import ArrowLeftLong from "../../assets/icons/arrow-left-long";

function AuthLayout() {
  return (
    <section className="auth-layout">
      <div className="auth-layout__image">
        <WhiteLogo/>
      </div>
      <div className="auth-layout__outlet">
        <div className="auth-layout__back">
          <Link to="/"><ArrowLeftLong/>Back</Link>
        </div>
        <div className="auth-layout__component"><Outlet/></div>
      </div>
    </section>
  );
}

export default AuthLayout;
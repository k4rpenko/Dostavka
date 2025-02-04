import React from "react";
import Image from "next/image";
import "./style.scss";

export default function WorkerLogin() {
  return (
    <div className="worker-login-container">
      <div className="login-form-section">
        <Image
          src="/logo/Logo-Dark.png"
          alt="DOSTAVKA Logo"
          width={120}
          height={23}
          className="logo"
          priority
        />

        <h2>Login</h2>
        <p className="welcome-text">Welcome back</p>

        <button className="google-signin">
          <Image src="/svg/google.svg" alt="Google Icon" width={20} height={20} />
          Google
        </button>

        <div className="divider">
          <span></span>
          <p>або</p>
          <span></span>
        </div>

        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="first name" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="password" />

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
        </form>

        <button type="submit" className="bottom-signin-button">
          <Image src="/svg/user-add-white.svg" alt="Sign In Icon" width={16} height={16} />
          Sign in
        </button>
      </div>

      <div className="image-section">
        <Image
          src="/Images/photo_2025-02-04_01-28-10.jpg"
          alt="Container"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

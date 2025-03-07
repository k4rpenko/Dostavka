"use client"
import type { Metadata } from "next";
import "../globals.css";
import '../fonts.css';
import styles from './style.module.scss';
import { useState, useEffect, useRef } from 'react';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
    setShowRegisterDropdown(false);
  };

  const toggleRegisterDropdown = () => {
    setShowRegisterDropdown(!showRegisterDropdown);
    setShowLoginDropdown(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      loginRef.current &&
      !loginRef.current.contains(event.target as Node) &&
      registerRef.current &&
      !registerRef.current.contains(event.target as Node)
    ) {
      setShowLoginDropdown(false);
      setShowRegisterDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <div className={styles.left}>
            <div className={styles.Text}><a href="">EN</a></div>
            <div className={styles.Text}>
              <a href="">              
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V2M12 20V22M6.414 6.414L5 5M17.728 17.728L19.142 19.142M4 12H2M20 12H22M17.728 6.414L19.142 5M6.414 17.728L5 19.142M12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <div className={styles.Text}><a href="aboutdostavka">About us</a></div>
          </div>
          
          <a href="/home" className={styles.center}>
            <img className={styles.logoImage} src="/logo/Logo-Dark.png" alt="Logo"/>
          </a>

          <div className={styles.right}>
            <div className={styles.dropdown} ref={loginRef}>
              <button onClick={toggleLoginDropdown} className={styles.authButton}>
                <samp>Login</samp>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showLoginDropdown && (
                <div className={styles.dropdownContent}>
                  <a href="/login/director">Director</a>
                  <a href="/login/worker">Worker</a>
                </div>
              )}
            </div>
            <div className={styles.dropdown} ref={registerRef}>
              <button onClick={toggleRegisterDropdown} className={styles.authButton}>
                <samp>Register</samp>
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showRegisterDropdown && (
                <div className={styles.dropdownContent}>
                  <a href="/register/director">Director</a>
                  <a href="/register/worker">Worker</a>
                </div>
              )}
            </div>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
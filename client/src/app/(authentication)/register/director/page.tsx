'use client';

import { useState, useEffect } from 'react';
import styles from './style.module.scss';

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkMode);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`${styles.appContainer} ${isDarkMode ? styles.darkTheme : ''}`}>
            <div className={styles.appRegister}>
                <div className={styles.formContainer}>
                    <div className={styles.LogoItem}>
                        <img className={styles.LogoImage} src={isDarkMode ? "/logo/Logo-Light.png" : "/logo/Logo-Dark.png"} alt="Logo"/>
                        <div className={styles.LogoSvg} onClick={toggleTheme}>
                            {isDarkMode ? (
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            ) : (
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            )}
                        </div>
                    </div>
                    <div className={styles.registerItem}>
                        <div className={styles.headingItem}>
                            <h2 className={styles.heading}>Registration</h2>
                            <p className={styles.description}>Join us right now</p>
                        </div>
                        <form className={styles.formBox}>
                            <div className={styles.formInputBox}>
                                <div className={styles.formInput}>
                                    <h2>Full Name</h2>
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className={styles.formInput}>
                                    <h2>Company Name and Address</h2>
                                    <input type="text" placeholder="Company Name and Address" />
                                </div>
                                <div className={styles.formInput}>
                                    <h2>Email</h2>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div className={styles.formInput}>
                                    <h2>Phone Number</h2>
                                    <input type="tel" placeholder="Phone Number" />
                                </div>
                                <div className={styles.formInput}>
                                    <h2>Password</h2>
                                    <input type="password" placeholder="Password" />
                                </div>
                                <div className={styles.formInput}>
                                    <h2>Confirm Password</h2>
                                    <input type="password" placeholder="Confirm Password" />
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={styles.checkboxContainer}>
                                    <input type="checkbox" id="terms" />
                                    <label htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                                </div>
                                <button type="submit">
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M19 16V13M19 13V10M19 13H16M19 13H22M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>Register</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.appImage}>
                <div className={styles.appImageBox}>
                    <img src="/Images/RegiserCar.jpeg" alt="Background Image" />
                </div>
            </div>
        </div>
    );
}


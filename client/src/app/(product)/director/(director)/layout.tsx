"use client";
import Header from "@/conponents/director/settings/Header/header";
import { useEffect, useState } from "react";
import styles from './style.module.scss';
import axios from "axios";
import { MemoryCacheService } from "@/data/Cache/MemoryCacheService";
import { WorkerData } from "@/data/Module/WorkerData";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  //const cacheService = new MemoryCacheService();
  //let workerData: WorkerData;
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*
    const fetchJob = async () => {
      const result = await cacheService.getItem('User');
      try {
        if(result == null){
          
          const response = await axios.get("https://localhost:7086/api/redirect/job", {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          });
  
          if (response.status === 200 && response.data.redirectUrl !== "http://localhost:3000/shippers") {
            window.location.href = response.data.redirectUrl;
            return;
          }
          setLoading(false);
        }
        
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    fetchJob();
    */
  }, []);

  //if (loading) return <p></p>;

  return (
    <html lang="en">
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
            <div className={styles.Text}><a href="AboutDostavka">About us</a></div>
          </div>
          
          <div className={styles.center}>
            <img className={styles.logoImage} src="/logo/Logo-Dark.png" alt="Logo"/>
          </div>

          <div className={styles.right}>
            <a href="/login" className={styles.authButton}>
              <samp>Login</samp>
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="/register" className={styles.authButton}>
              <samp>Register</samp>
              <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
        </header>
      <body className={styles.Body}>
        <Header />
        {children}
      </body>
    </html>
  );
}


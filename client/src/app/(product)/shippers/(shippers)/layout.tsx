"use client";
import Header from "@/conponents/carriers/Header/header";
import { useEffect, useState } from "react";
import styles from './style.module.scss';
import axios from "axios";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get("https://localhost:7086/api/redirect/job", {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });

        if (response.status === 200 && response.data.redirectUrl !== "http://localhost:3000/shippers") {
          window.location.href = response.data.redirectUrl;
          return;
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    fetchJob();
  }, []);

  if (loading) return <p></p>;

  return (
    <html lang="en">
      <body className={styles.Body}>
        <Header />
        {children}
      </body>
    </html>
  );
}


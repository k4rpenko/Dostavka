"use client";
import Header from "@/conponents/carriers/Header/header";
import { useEffect, useState } from "react";
import styles from './style.module.scss';
import axios from "axios";
import { MemoryCacheService } from "@/data/Cache/MemoryCacheService";
import { DecryptAES } from "@/data/Hash/AES-256-GCM/AES";
import { WorkerData } from "@/data/Module/WorkerData";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const cacheService = new MemoryCacheService();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const workerCache = await cacheService.getItem('Worker')
        if(workerCache == null){
          const response = await axios.get("https://localhost:7086/api/redirect/job", {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          });
  
          if (response.status === 200 && response.data.redirectUrl !== "http://localhost:3000/carriers") {
            if(response.data.redirectUrl === "http://localhost:3000/shippers")
            {
              await responseDATA();
            }
            window.location.href = response.data.redirectUrl;
          }
        }
        else if(workerCache.RoleWork === "shippers"){
          window.location.href = "http://localhost:3000/shippers";
          return;
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    const responseDATA = async () => {
      try {
        const responseDATA = await axios.get("https://localhost:7086/api/workers/data", {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
        const encryptedBase64 = responseDATA.data.workerData;
        const tag = responseDATA.data.tag;
        const decryptor = new DecryptAES(
          process.env.NEXT_PUBLIC_KEY!,
          process.env.NEXT_PUBLIC_IV!,
        );

        const result = await decryptor.decrypt(encryptedBase64, tag);
        const parsedData: WorkerData = JSON.parse(result);
        cacheService.setItem("Worker", parsedData);
        return;
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


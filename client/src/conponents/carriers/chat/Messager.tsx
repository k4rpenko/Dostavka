"use client";
import styles from './style.module.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import { Chats } from '@/data/Module/Chats';

export default function Messager({ MessagerGet }: { MessagerGet: Chats | null }) {
    const [message, setMessage] = useState("");

    useEffect(() => {

    }, []);

    const timeAgo = (dateTimeString: string): string => {
        if(dateTimeString === "" || dateTimeString === null){
            return ``;
        }
        const messageDate = new Date(dateTimeString);
        const now = new Date();
        
        if (isNaN(messageDate.getTime())) {
            return "Невідома дата";
        }
    
        const diffMs = now.getTime() - messageDate.getTime();
    
        const seconds = Math.floor(diffMs / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
    
        if (days > 0) {
            return `${days} дн. тому`;
        } else if (hours > 0) {
            return `${hours} год. тому`;
        } else if (minutes > 0) {
            return `${minutes} хв. тому`;
        } else {
            return `щойно`;
        }
    };

    const SendMessage = async (event) => {
        event.preventDefault();
        if (!message.trim()) return;
        try {
            var url = "http://localhost/api/message/" + MessagerGet?.chat.id;
            const response = await axios.put(
                url, 
                { text: message },
                {
                  withCredentials: true,
                  headers: { "Content-Type": "application/json" },
                }
              );
            if (response.status !== 200) throw new Error("Failed to send message");
            

            setMessage("");
        } catch (error) {
            console.error("Error:", error);
        }
    }


    if (MessagerGet === null) {
        return (
          <div className={styles.chatMessagesContainerNULL}>
            <h2>Click on the chat button to start chatting</h2>
          </div>
        );
    }

    return(
    <div className={styles.chatMessagesContainer}>
        <div className={styles.chatHeader}>
            <div className={styles.userAvatar}><img src={MessagerGet.worker.avatar} alt="" /></div>
            <div className={styles.userInfo}>
                <a href="" className={styles.userProfile}>
                    <span className={styles.userName}>{MessagerGet.worker.fullName}</span>
                </a>
                <a href="" className={styles.mainChatMessager}>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                                  fill="#fff"/>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
        <div className={styles.chatMessages}>
            {MessagerGet.chat.messages?.length === 0? (
                <div className={styles.chatMessagesNull}><h2>Write something</h2></div>
            ) : (
                MessagerGet.chat.messages.map((msg, index) => (
                    <div key={index} className={`${styles.message} ${styles[msg.type]}`}>
                        <p>{msg.text}</p>
                        <span className={styles.time}>{timeAgo(new Date(msg.createdAt).toISOString())}</span>
                    </div>
                ))
            )}
        </div>
        <div className={styles.chatInputBox}>
            <form className={styles.chatInput} onSubmit={SendMessage}>
                <input type="text" placeholder="Type a message..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button className={styles.chatButton} type="submit">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" transform="rotate(-45)">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M11.5003 12H5.41872M5.24634 12.7972L4.24158 15.7986C3.69128 17.4424 3.41613 18.2643 3.61359 18.7704C3.78506 19.21 4.15335 19.5432 4.6078 19.6701C5.13111 19.8161 5.92151 19.4604 7.50231 18.7491L17.6367 14.1886C19.1797 13.4942 19.9512 13.1471 20.1896 12.6648C20.3968 12.2458 20.3968 11.7541 20.1896 11.3351C19.9512 10.8529 19.1797 10.5057 17.6367 9.81135L7.48483 5.24303C5.90879 4.53382 5.12078 4.17921 4.59799 4.32468C4.14397 4.45101 3.77572 4.78336 3.60365 5.22209C3.40551 5.72728 3.67772 6.54741 4.22215 8.18767L5.24829 11.2793C5.34179 11.561 5.38855 11.7019 5.407 11.8459C5.42338 11.9738 5.42321 12.1032 5.40651 12.231C5.38768 12.375 5.34057 12.5157 5.24634 12.7972Z"
                                stroke="#fff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"/>
                        </g>
                    </svg>
                </button>
            </form>
        </div>
    </div>
    );
}
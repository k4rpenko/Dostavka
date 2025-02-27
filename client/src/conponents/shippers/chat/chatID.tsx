"use client";
import { ChatModel } from '@/data/Module/ChatModelData';
import styles from './style.module.scss';
import { useEffect, useState } from "react";

export default function chatID() {
    const [chatModel, setChatModel] = useState<ChatModel[] | []>([]);
    
    const timeAgo = (dateTimeString) => {
        const messageDate = new Date(dateTimeString);
        const now = new Date();
        const diffMs = now - messageDate;

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

    useEffect(() => {
    }, []);

    return(
        <div className={styles.mainUserChat}>
            {chatModel!.map((user, index) => (
                <a className={styles.chatContainer}>
                    <div className={styles.chatUser}>
                        <div className={styles.userAvatar}></div>
                        <div className={styles.chatText}>
                            <div className={styles.chatUserInfo}>
                                <span>{user.usersData.FullName}</span>
                                <span className={styles.chatUserTime}>{timeAgo(user.chat!.slice(-1)[0].createdAt)}</span>
                            </div>
                            <div className={styles.chatMessageItem}>
                                <samp>{user.chat!.slice(-1)[0].text}</samp>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
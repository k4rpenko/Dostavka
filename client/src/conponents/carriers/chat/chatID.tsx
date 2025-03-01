"use client";
import styles from './style.module.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import { Chats } from '@/data/Module/Chats';

export default function ChatID({ MessagerSet }: { MessagerSet: (chat: Chats | null) => void }) {
    const [chatModel, setChatModel] = useState<Chats[] | []>([]);

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
    

    useEffect(() => {
        let isMounted = true;

        const addUserChat = async () => {
            const response = await axios.get("http://localhost/api/message/AllChats", {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            });
            
            if (response.status === 200)
            {
                const parsedData: Chats[] = response.data.chats;
                setChatModel(parsedData);
            }
        }


        const pollServer = async () => {
            try {
                const response = await axios.get("http://localhost/api/message/LongPoll", { withCredentials: true });

                if (response.status === 200) {
                    const parsedData: Chats = response.data.chats;
                    setChatModel(prevChats => {
                        const existingChatIndex = prevChats.findIndex(chat => chat.chat.id === parsedData.chat.id);
                        if (existingChatIndex !== -1) {
                            const updatedChats = [...prevChats];
                            updatedChats[existingChatIndex] = { ...prevChats[existingChatIndex], ...parsedData };
                            return updatedChats;
                        } else {
                            return [...prevChats, parsedData];
                        }
                    });
                    
                    MessagerSet(prevChat => {
                        if (prevChat && prevChat.chat.id === parsedData.chat.id) {
                            return parsedData;
                        }
                        return prevChat;
                    });
                }
            } catch (error) {
                console.error("Помилка при отриманні даних", error);
            } finally {
                setTimeout(pollServer, 100);
            }
        };

        addUserChat();
        pollServer();
    }, []);

    return(
        <div className={styles.mainUserChat}>
            {chatModel!.map((user, index) => (
                <a key={index} className={styles.chatContainer} onClick={() => MessagerSet(user)}>
                    <div className={styles.chatUser}>
                        <div className={styles.userAvatar}>
                            <img src={user.worker.avatar} alt="" />
                        </div>
                        <div className={styles.chatText}>
                            <div className={styles.chatUserInfo}>
                                <span>{user.worker.fullName}</span>
                                <span className={styles.chatUserTime}>{user.chat && user.chat.messages?.length > 0 ? timeAgo(user.chat.messages[user.chat.messages?.length - 1].createdAt) : ''}</span>
                            </div>
                            <div className={styles.chatMessageItem}>
                                <samp>{user.chat && user.chat.messages?.length > 0 ? user.chat.messages[user.chat.messages?.length - 1].text : 'no messages'}</samp>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
import React from "react";
import styles from "./style.module.scss";

export default function Notification() {

    const NotificationJSON = [
        { id: 1, Title: "Shipment Successfully Delivered", Text: "The shipment with tracking number 02930293 has been successfully delivered to Oleksandr Petrenko in Kyiv. The transportation cost was $200.", status: 0, data: "2025-02-12T03:21:56"},
        { id: 2, Title: "You Received a Review", Text: "Your company DOSTAVKA has received a review from Maria Ivanchenko. Please read it and leave a reciprocal review to improve your reputation.", status: 0, data: "2025-02-10T03:21:56"},
        { id: 3, Title: "Shipment Damaged", Text: "The vehicle with license plate number AB1234CD in New York was involved in an accident. The shipment with tracking number 93827164 has been damaged.", status: 2, data: "2025-02-15T03:21:56"},
        { id: 3, Title: "Delivery Delay", Text: "The shipment with tracking number 56473820 has not arrived by the specified date. Your client is still waiting for it. Please clarify the delivery status.", status: 1, data: "2025-02-11T03:21:56"},
    ];
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

    return (
        <div className={styles.container}>
            <div className={styles.header}>
              <h2>Notification</h2>
            </div>
            <div className={styles.date}>
              <p>Today</p>
            </div>
            <div className={styles.footer}>
                {NotificationJSON.map((item, index) => (
                    <div className={styles.panel}>
                        <div className={styles.icon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12V6H12H4V12V18H12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15 17L17 19L20 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4 6L12 12L20 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.header}>
                                <div className={styles.header2}>
                                    <div className={`${styles.title} ${item.status === 1  ? styles.badly: item.status === 2 ? styles.problem: ""}`}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.152 13.544C6.27733 13.544 5.456 13.3787 4.688 13.048C3.93067 12.728 3.25867 12.28 2.672 11.704C2.096 11.1173 1.64267 10.44 1.312 9.672C0.981333 8.904 0.816 8.08267 0.816 7.208C0.816 6.33333 0.981333 5.512 1.312 4.744C1.64267 3.976 2.096 3.304 2.672 2.728C3.25867 2.14133 3.93067 1.688 4.688 1.368C5.456 1.03733 6.27733 0.872 7.152 0.872C8.02667 0.872 8.848 1.03733 9.616 1.368C10.384 1.688 11.056 2.14133 11.632 2.728C12.2187 3.304 12.672 3.976 12.992 4.744C13.3227 5.512 13.488 6.33333 13.488 7.208C13.488 8.08267 13.3227 8.904 12.992 9.672C12.672 10.44 12.2187 11.1173 11.632 11.704C11.056 12.28 10.384 12.728 9.616 13.048C8.848 13.3787 8.02667 13.544 7.152 13.544ZM7.152 12.44C7.87733 12.44 8.55467 12.3067 9.184 12.04C9.81333 11.7627 10.368 11.384 10.848 10.904C11.328 10.424 11.7013 9.86933 11.968 9.24C12.2453 8.61067 12.384 7.93333 12.384 7.208C12.384 6.48267 12.2453 5.80533 11.968 5.176C11.7013 4.54667 11.328 3.992 10.848 3.512C10.368 3.032 9.81333 2.65867 9.184 2.392C8.55467 2.11467 7.87733 1.976 7.152 1.976C6.42667 1.976 5.74933 2.11467 5.12 2.392C4.49067 2.65867 3.936 3.032 3.456 3.512C2.976 3.992 2.59733 4.54667 2.32 5.176C2.05333 5.80533 1.92 6.48267 1.92 7.208C1.92 7.93333 2.05333 8.61067 2.32 9.24C2.59733 9.86933 2.976 10.424 3.456 10.904C3.936 11.384 4.49067 11.7627 5.12 12.04C5.74933 12.3067 6.42667 12.44 7.152 12.44ZM7.152 11.672C6.53333 11.672 5.952 11.56 5.408 11.336C4.87467 11.1013 4.4 10.7813 3.984 10.376C3.57867 9.96 3.25867 9.48533 3.024 8.952C2.8 8.408 2.688 7.82667 2.688 7.208C2.688 6.58933 2.8 6.01333 3.024 5.48C3.25867 4.936 3.57867 4.46133 3.984 4.056C4.4 3.64 4.87467 3.32 5.408 3.096C5.952 2.86133 6.53333 2.744 7.152 2.744C7.77067 2.744 8.352 2.86133 8.896 3.096C9.44 3.32 9.91467 3.64 10.32 4.056C10.736 4.46133 11.056 4.936 11.28 5.48C11.5147 6.01333 11.632 6.58933 11.632 7.208C11.632 7.82667 11.5147 8.408 11.28 8.952C11.056 9.48533 10.736 9.96 10.32 10.376C9.91467 10.7813 9.44 11.1013 8.896 11.336C8.352 11.56 7.77067 11.672 7.152 11.672Z" fill="#125840"/>
                                        </svg>
                                        <span>{item.Title}</span>
                                    </div>
                                    <span className={styles.time}>{timeAgo(item.data)}</span>
                                </div>
                            </div>
                            <p>{item.Text}</p>
                        </div>
                    </div>
                ))}
                <div>
                <div className={styles.view}>
                  <button>View all notification </button>
                </div>
                </div>
            </div>
    </div>
    );
}
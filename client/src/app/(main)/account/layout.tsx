"use client";

import { useState } from "react";
import styles from "./style.module.scss";
import Employees from '@/conponents/account/employees/page';
import Reviews from '@/conponents/account/reviews/page';
import About from '@/conponents/account/about/page';


export default function Layout({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState<string>("employees"); 

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div className={styles.profileContainer}>
            <div className={styles.header}>
                <img src="/images/account.jpg" alt="Containers" className={styles.backgroundImage} />
                <img src="/images/img.png" alt="Containers" className={styles.avatar} />
            </div>
            <div className={styles.content}>
                <h2>DOSTAVKA | Logistics & Delivery</h2>
                <p className={styles.username}>@dostavka</p>
                <p className={styles.description}>
                    Fast, efficient and secure delivery services for cargo, document, and product delivery.
                </p>
                <div className={styles.stats}>
                    <span className={styles.statsItem}>
                        <svg width="57" height="9" viewBox="0 0 57 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z" fill="#FFCB45"/>
                            <path d="M16.5 0L18.0296 2.60796L21 3.24671L18.975 5.49727L19.2812 8.5L16.5 7.28296L13.7188 8.5L14.025 5.49727L12 3.24671L14.9704 2.60796L16.5 0Z" fill="#FFCB45"/>
                            <path d="M28.5 0L30.0296 2.60796L33 3.24671L30.975 5.49727L31.2812 8.5L28.5 7.28296L25.7188 8.5L26.025 5.49727L24 3.24671L26.9704 2.60796L28.5 0Z" fill="#FFCB45"/>
                            <path d="M40.5 0L42.0296 2.60796L45 3.24671L42.975 5.49727L43.2812 8.5L40.5 7.28296L37.7188 8.5L38.025 5.49727L36 3.24671L38.9704 2.60796L40.5 0Z" fill="#FFCB45"/>
                            <path d="M52.5 0L54.0296 2.60796L57 3.24671L54.975 5.49727L55.2812 8.5L52.5 7.28296L49.7188 8.5L50.025 5.49727L48 3.24671L50.9704 2.60796L52.5 0Z" fill="#F2F2F2"/>
                        </svg>
                    </span>
                    <span className={styles.statsItem}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8333 9.375C21.1096 9.375 21.3746 9.26525 21.5699 9.0699C21.7653 8.87455 21.875 8.6096 21.875 8.33333V4.16667C21.875 3.8904 21.7653 3.62545 21.5699 3.4301C21.3746 3.23475 21.1096 3.125 20.8333 3.125H16.6667C16.3904 3.125 16.1254 3.23475 15.9301 3.4301C15.7347 3.62545 15.625 3.8904 15.625 4.16667V5.20833H9.375V4.16667C9.375 3.8904 9.26525 3.62545 9.0699 3.4301C8.87455 3.23475 8.6096 3.125 8.33333 3.125H4.16667C3.8904 3.125 3.62545 3.23475 3.4301 3.4301C3.23475 3.62545 3.125 3.8904 3.125 4.16667V8.33333C3.125 8.6096 3.23475 8.87455 3.4301 9.0699C3.62545 9.26525 3.8904 9.375 4.16667 9.375H5.20833V15.625H4.16667C3.8904 15.625 3.62545 15.7347 3.4301 15.9301C3.23475 16.1254 3.125 16.3904 3.125 16.6667V20.8333C3.125 21.1096 3.23475 21.3746 3.4301 21.5699C3.62545 21.7653 3.8904 21.875 4.16667 21.875H8.33333C8.6096 21.875 8.87455 21.7653 9.0699 21.5699C9.26525 21.3746 9.375 21.1096 9.375 20.8333V19.7917H15.625V20.8333C15.625 21.1096 15.7347 21.3746 15.9301 21.5699C16.1254 21.7653 16.3904 21.875 16.6667 21.875H20.8333C21.1096 21.875 21.3746 21.7653 21.5699 21.5699C21.7653 21.3746 21.875 21.1096 21.875 20.8333V16.6667C21.875 16.3904 21.7653 16.1254 21.5699 15.9301C21.3746 15.7347 21.1096 15.625 20.8333 15.625H19.7917V9.375H20.8333ZM17.7083 15.625H16.6667C16.3904 15.625 16.1254 15.7347 15.9301 15.9301C15.7347 16.1254 15.625 16.3904 15.625 16.6667V17.7083H9.375V16.6667C9.375 16.3904 9.26525 16.1254 9.0699 15.9301C8.87455 15.7347 8.6096 15.625 8.33333 15.625H7.29167V9.375H8.33333C8.6096 9.375 8.87455 9.26525 9.0699 9.0699C9.26525 8.87455 9.375 8.6096 9.375 8.33333V7.29167H15.625V8.33333C15.625 8.6096 15.7347 8.87455 15.9301 9.0699C16.1254 9.26525 16.3904 9.375 16.6667 9.375H17.7083V15.625Z" fill="#6F6F73"/>
                        </svg>
                        19
                    </span>
                    <span className={styles.statsItem} style={{ color: '#30D158' }}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.8437 16.7497C21.5937 19.5309 19.5833 21.3538 16.6666 21.3538H7.29158C4.41659 21.3538 2.08325 19.0205 2.08325 16.1455V8.85384C2.08325 6.02051 3.79159 4.04134 6.44783 3.70801C6.71867 3.66634 6.99992 3.64551 7.29158 3.64551H16.6666C16.9374 3.64551 17.1978 3.65592 17.4478 3.69759C19.9374 3.98926 21.6249 5.72884 21.8437 8.24967C21.8749 8.55176 21.6249 8.80176 21.3228 8.80176H19.7083C18.7083 8.80176 17.7812 9.18717 17.1145 9.87467C16.3228 10.6455 15.927 11.7288 16.0208 12.8122C16.1874 14.708 17.8541 16.1976 19.8333 16.1976H21.3228C21.6249 16.1976 21.8749 16.4476 21.8437 16.7497Z" fill="#30D158"/>
                            <path d="M22.9168 11.4267V13.5726C22.9168 14.1455 22.4585 14.6142 21.8751 14.6351H19.8335C18.7085 14.6351 17.6772 13.8122 17.5835 12.6872C17.521 12.0309 17.771 11.4163 18.2085 10.9892C18.5939 10.5934 19.1251 10.3643 19.7085 10.3643H21.8751C22.4585 10.3851 22.9168 10.8538 22.9168 11.4267Z" fill="#30D158"/>
                        </svg>
                        150$/km 100gk
                    </span>

                </div>

                <div className={styles.tabs}>
                    <button
                        className={styles.tabButton}
                        onClick={() => handleTabChange("employees")}
                    >
                        Employees
                    </button>
                    <button
                        className={styles.tabButton}
                        onClick={() => handleTabChange("reviews")}
                    >
                        Reviews
                    </button>
                    <button
                        className={styles.tabButton}
                        onClick={() => handleTabChange("about")}
                    >
                        About company
                    </button>
                </div>
            </div>

            <div className={styles.tabContent}>
                {activeTab === "employees" && <Employees />}
                {activeTab === "reviews" && <Reviews />}
                {activeTab === "about" && <About />}

            </div>

            {children}
        </div>
    );
}

"use client";
import styles from './style.module.scss';
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const match = pathname.match(/^\/shippers\/([^/]+)/);
    const currentPage = match ? match[1] : "";

    return(
        <header className={styles.Header}>
            <div className={styles.HeaderApp}>
                <div className={styles.Title}>
                    <div className={styles.TitleItem}>
                        <div className={styles.TitleLogo}>
                            <svg width="20" height="20" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8125 5.06503L17.3125 3.56503C17.4375 3.44003 17.5 3.19003 17.5 3.00253C17.4375 2.81503 17.3125 2.62753 17.125 2.56503L10.875 0.0650323C10.625 -0.0599677 10.375 0.00253253 10.1875 0.190033L8.75 1.62753L7.3125 0.190033C7.125 0.00253253 6.875 -0.0599677 6.625 0.0650323L0.375 2.56503C0.1875 2.62753 0.0625 2.81503 0 3.00253C0 3.19003 0.0625 3.44003 0.1875 3.56503L1.6875 5.06503L0.125 7.12753C2.79397e-08 7.25253 0 7.50253 0 7.69003C0.0625 7.87753 0.1875 8.00253 0.375 8.12753L6.625 10.6275C6.6875 10.6275 6.75 10.69 6.875 10.69C7.0625 10.69 7.25 10.6275 7.375 10.44L8.75 8.62753L10.125 10.44C10.25 10.6275 10.4375 10.69 10.625 10.69C10.6875 10.69 10.8125 10.69 10.875 10.6275L17.125 8.12753C17.3125 8.06503 17.4375 7.87753 17.5 7.69003C17.5625 7.50253 17.5 7.31503 17.375 7.12753L15.8125 5.06503ZM8.75 6.81503L4.1875 5.00253L8.75 3.19003L13.3125 5.00253L8.75 6.81503Z" fill="white"/>
                                <path d="M10.625 11.8774C10.0625 11.8774 9.5 11.6274 9.125 11.1274L8.75 10.6274L8.375 11.1274C7.875 11.8149 6.9375 12.0649 6.1875 11.7524L1.875 10.0024V12.5024C1.875 12.7524 2 13.0024 2.25 13.0649L8.5 15.5649C8.5625 15.5649 8.625 15.6274 8.75 15.6274C8.875 15.6274 8.9375 15.6274 9 15.5649L15.25 13.0649C15.5 12.9399 15.625 12.7524 15.625 12.5024V10.0024L11.3125 11.7524C11.125 11.8149 10.875 11.8774 10.625 11.8774Z" fill="white"/>
                            </svg>
                        </div>
                        <div className={styles.TitleLogoName}><h1>Dostavka</h1></div>
                    </div>
                    <div className={styles.TitleV}><samp>1.0V</samp></div>
                </div>
                <div className={styles.Main}>
                    <div className={styles.Pages}>
                    <a href='companies' className={`${styles.PagesBox} ${currentPage === "companies"  ? styles.active : ""}`}>
                        <div className={styles.PagesBoxLogo}>
                            <svg width="25" height="25" fill="#6F6F73" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path d="M81.49,21.21V32.35a6.48,6.48,0,0,1-6.11,6.56,6.19,6.19,0,0,1-4.57-1.76,6.26,6.26,0,0,1-1.91-4.53,6.3,6.3,0,0,1-12.6,0,6.3,6.3,0,1,1-12.6,0,6.3,6.3,0,0,1-12.6,0,6.27,6.27,0,0,1-6.48,6.29,6.48,6.48,0,0,1-6.11-6.56V21.21A3.21,3.21,0,0,1,21.72,18H78.28A3.21,3.21,0,0,1,81.49,21.21ZM72.81,82a2.82,2.82,0,0,0,2.82-2.82V42.9h-.51a10.14,10.14,0,0,1-6.23-2.15,10.29,10.29,0,0,1-12.59,0,10.31,10.31,0,0,1-12.6,0,10.29,10.29,0,0,1-12.59,0,10.27,10.27,0,0,1-6.27,2.14h-.47V79.18A2.82,2.82,0,0,0,27.19,82H33.5V61.82H48.83V82Z"/>
                            </svg>
                        </div>
                        <div className={styles.PagesBoxText}><samp>Сompanies</samp></div>
                    </a>

                        <a href='chat' className={`${styles.PagesBox} ${currentPage === "chat"  ? styles.active : ""}`}>
                            <div className={styles.PagesBoxLogo}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.8335 2.08325H4.16683C3.6143 2.08325 3.08439 2.30275 2.69369 2.69345C2.30299 3.08415 2.0835 3.61405 2.0835 4.16659V16.6666C2.0835 17.2191 2.30299 17.749 2.69369 18.1397C3.08439 18.5304 3.6143 18.7499 4.16683 18.7499H7.29183V21.8749C7.29239 22.0713 7.34842 22.2634 7.45347 22.4293C7.55852 22.5952 7.70832 22.728 7.88558 22.8124C8.02407 22.8834 8.1779 22.9192 8.3335 22.9166C8.56846 22.9152 8.79606 22.8345 8.97933 22.6874L13.9064 18.7499H20.8335C21.386 18.7499 21.9159 18.5304 22.3066 18.1397C22.6973 17.749 22.9168 17.2191 22.9168 16.6666V4.16659C22.9168 3.61405 22.6973 3.08415 22.3066 2.69345C21.9159 2.30275 21.386 2.08325 20.8335 2.08325ZM8.3335 11.4583C8.12747 11.4583 7.92608 11.3972 7.75478 11.2827C7.58348 11.1682 7.44996 11.0056 7.37112 10.8152C7.29228 10.6249 7.27165 10.4154 7.31184 10.2134C7.35204 10.0113 7.45125 9.8257 7.59693 9.68002C7.74261 9.53434 7.92821 9.43513 8.13028 9.39493C8.33234 9.35474 8.54179 9.37537 8.73212 9.45421C8.92246 9.53305 9.08515 9.66657 9.19961 9.83787C9.31407 10.0092 9.37516 10.2106 9.37516 10.4166C9.37516 10.6929 9.26542 10.9578 9.07007 11.1532C8.87471 11.3485 8.60976 11.4583 8.3335 11.4583ZM12.5002 11.4583C12.2941 11.4583 12.0927 11.3972 11.9214 11.2827C11.7501 11.1682 11.6166 11.0056 11.5378 10.8152C11.4589 10.6249 11.4383 10.4154 11.4785 10.2134C11.5187 10.0113 11.6179 9.8257 11.7636 9.68002C11.9093 9.53434 12.0949 9.43513 12.2969 9.39493C12.499 9.35474 12.7085 9.37537 12.8988 9.45421C13.0891 9.53305 13.2518 9.66657 13.3663 9.83787C13.4807 10.0092 13.5418 10.2106 13.5418 10.4166C13.5418 10.6929 13.4321 10.9578 13.2367 11.1532C13.0414 11.3485 12.7764 11.4583 12.5002 11.4583ZM16.6668 11.4583C16.4608 11.4583 16.2594 11.3972 16.0881 11.2827C15.9168 11.1682 15.7833 11.0056 15.7045 10.8152C15.6256 10.6249 15.605 10.4154 15.6452 10.2134C15.6854 10.0113 15.7846 9.8257 15.9303 9.68002C16.0759 9.53434 16.2615 9.43513 16.4636 9.39493C16.6657 9.35474 16.8751 9.37537 17.0655 9.45421C17.2558 9.53305 17.4185 9.66657 17.5329 9.83787C17.6474 10.0092 17.7085 10.2106 17.7085 10.4166C17.7085 10.6929 17.5987 10.9578 17.4034 11.1532C17.208 11.3485 16.9431 11.4583 16.6668 11.4583Z" fill="#6F6F73"/>
                                </svg>
                            </div>
                            <div className={styles.PagesBoxText}><samp>Chat</samp></div>
                        </a>
                        <a href='map' className={`${styles.PagesBox} ${currentPage === "map"  ? styles.active : ""}`}>
                            <div className={styles.PagesBoxLogo}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_367_1164)">
                                        <path d="M2.53794 5.36136C2.0835 5.87864 2.0835 6.76554 2.0835 8.53934V18.324C2.0835 19.5802 2.0835 20.2084 2.4112 20.6813C2.7389 21.1541 3.31184 21.3527 4.4577 21.75L5.80582 22.2173C6.53595 22.4706 7.09778 22.6653 7.56926 22.7907C7.87683 22.8725 8.15988 22.6311 8.15988 22.3129V6.5314C8.15988 6.27211 7.96854 6.05328 7.71721 5.98953C7.31177 5.88669 6.8244 5.71772 6.15643 5.48615C4.53845 4.92522 3.72948 4.64476 3.11393 4.92957C2.89538 5.03069 2.69929 5.17769 2.53794 5.36136Z" fill="#6F6F73"/>
                                        <path d="M13.1464 3.626L11.5464 4.73538C10.9676 5.13671 10.5434 5.43084 10.1812 5.64053C10.0095 5.73992 9.896 5.9197 9.896 6.11807V21.792C9.896 22.178 10.296 22.419 10.6212 22.2109C10.9702 21.9877 11.3698 21.7106 11.8539 21.3749L13.4539 20.2655C14.0327 19.8643 14.4569 19.5701 14.8191 19.3604C14.9909 19.261 15.1043 19.0813 15.1043 18.8829V3.20899C15.1043 2.82296 14.7043 2.58194 14.3791 2.78996C14.0302 3.01324 13.6305 3.29036 13.1464 3.626Z" fill="#6F6F73"/>
                                        <path d="M20.5425 3.25085L19.1944 2.78348C18.4642 2.53033 17.9024 2.33559 17.431 2.21016C17.1234 2.12835 16.8403 2.36978 16.8403 2.68805V18.4695C16.8403 18.7287 17.0317 18.9476 17.2829 19.0113C17.6885 19.1141 18.1759 19.2831 18.8438 19.5147C20.4617 20.0756 21.2707 20.3561 21.8863 20.0713C22.1048 19.9702 22.3009 19.8232 22.4622 19.6395C22.9167 19.1223 22.9167 18.2353 22.9167 16.4615V6.67684C22.9167 5.42061 22.9167 4.79249 22.589 4.31962C22.2613 3.84673 21.6884 3.64811 20.5425 3.25085Z" fill="#6F6F73"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_367_1164">
                                            <rect width="25" height="25" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.PagesBoxText}><samp>Map</samp></div>
                        </a>
                        <a href='notification' className={`${styles.PagesBox} ${currentPage === "notification"  ? styles.active : ""}`}>
                            <div className={styles.PagesBoxLogo}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.6085 13.7553L19.5035 12.1929C19.2714 11.8447 19.0614 11.1859 19.0614 10.8V8.41882C19.0614 6.20706 17.5364 4.29647 15.3373 3.40235C14.7627 2.53647 13.7018 2 12.4862 2C11.2817 2 10.1988 2.55529 9.62415 3.43059C7.46926 4.34353 5.97741 6.23529 5.97741 8.41882V10.8C5.97741 11.1859 5.76745 11.8447 5.53538 12.1835L4.41926 13.7553C3.97723 14.3859 3.87777 15.0824 4.15404 15.7224C4.41926 16.3529 5.04915 16.8424 5.8669 17.0776C8.01074 17.6988 10.2651 18 12.5194 18C14.7737 18 17.0281 17.6988 19.1719 17.0871C19.9455 16.8706 20.5422 16.3718 20.8295 15.7224C21.1169 15.0729 21.0395 14.3576 20.6085 13.7553Z" fill="#6F6F73"/>
                                    <path d="M16 20.015C15.4796 21.755 14.1044 23 12.4938 23C11.5151 23 10.5487 22.52 9.86725 21.665C9.4708 21.215 9.17345 20.615 9 20C9.16106 20.03 9.32212 20.045 9.49557 20.075C9.78053 20.12 10.0779 20.165 10.3752 20.195C11.0814 20.27 11.8 20.315 12.5186 20.315C13.2248 20.315 13.931 20.27 14.6248 20.195C14.885 20.165 15.1451 20.15 15.3929 20.105C15.5912 20.075 15.7894 20.045 16 20.015Z" fill="#6F6F73"/>
                                </svg>

                            </div>
                            <div className={styles.PagesBoxText}><samp>Notification</samp></div>
                        </a>
                        <a href='workers' className={`${styles.PagesBox} ${currentPage === "workers"  ? styles.active : ""}`}>
                            <div className={styles.PagesBoxLogo}>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2596 8.09367C18.1867 8.08325 18.1138 8.08325 18.0409 8.09367C16.4263 8.04159 15.145 6.71867 15.145 5.09367C15.145 3.43742 16.4888 2.08325 18.1554 2.08325C19.8117 2.08325 21.1659 3.427 21.1659 5.09367C21.1554 6.71867 19.8742 8.04159 18.2596 8.09367Z" fill="#6F6F73"/>
                                    <path d="M21.658 15.3129C20.4914 16.0942 18.856 16.3858 17.3455 16.1879C17.7414 15.3338 17.9497 14.3858 17.9601 13.3858C17.9601 12.3442 17.731 11.3546 17.2935 10.49C18.8351 10.2817 20.4705 10.5733 21.6476 11.3546C23.2935 12.4379 23.2935 14.2192 21.658 15.3129Z" fill="#6F6F73"/>
                                    <path d="M6.70833 8.09367C6.78125 8.08325 6.85417 8.08325 6.92708 8.09367C8.54167 8.04159 9.82292 6.71867 9.82292 5.09367C9.82292 3.427 8.47917 2.08325 6.8125 2.08325C5.15625 2.08325 3.8125 3.427 3.8125 5.09367C3.8125 6.71867 5.09375 8.04159 6.70833 8.09367Z" fill="#6F6F73"/>
                                    <path d="M6.82389 13.386C6.82389 14.3965 7.04264 15.3548 7.43848 16.2194C5.96973 16.3756 4.43848 16.0631 3.31348 15.3235C1.66764 14.2298 1.66764 12.4485 3.31348 11.3548C4.42806 10.6048 6.00098 10.3027 7.48014 10.4694C7.05306 11.3444 6.82389 12.334 6.82389 13.386Z" fill="#6F6F73"/>
                                    <path d="M12.626 16.5312C12.5427 16.5208 12.4489 16.5208 12.3552 16.5312C10.4385 16.4687 8.90723 14.8958 8.90723 12.9583C8.91764 10.9792 10.5114 9.375 12.501 9.375C14.4802 9.375 16.0843 10.9792 16.0843 12.9583C16.0739 14.8958 14.5531 16.4687 12.626 16.5312Z" fill="#6F6F73"/>
                                    <path d="M9.24023 18.6882C7.66732 19.7403 7.66732 21.4695 9.24023 22.5111C11.0319 23.7091 13.9694 23.7091 15.7611 22.5111C17.334 21.4591 17.334 19.7299 15.7611 18.6882C13.9798 17.4903 11.0423 17.4903 9.24023 18.6882Z" fill="#6F6F73"/>
                                </svg>

                            </div>
                            <div className={styles.PagesBoxText}><samp>Workers</samp></div>
                        </a>
                        
                    </div>
                    <a className={styles.UserItem}>
                        <div className={styles.UserAvatar}><img src='/images/img.png' /></div>
                        <div className={styles.UserText}>
                            <p>Daem Daem Daem</p>
                            <p>Daem@gmail.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    );
}
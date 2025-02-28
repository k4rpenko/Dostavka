"use client";
import styles from './style.module.scss';
import {usePathname} from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const match = pathname.match(/^\/director\/([^/]+)/);
    const currentPage = match ? match[1] : "";

    return(
        <header className={styles.Header}>
            <div className={styles.HeaderApp}>
                <div className={styles.Title}>
                    <div className={styles.TitleItem}>
                        <div className={styles.TitleLogoName}><h1>Settings</h1></div>
                    </div>
                    <div className={styles.TitleV}><samp>1.0V</samp></div>
                </div>
                <div className={styles.Main}>
                    <div className={styles.Pages}>
                    <a href='profile' className={`${styles.PagesBox} ${currentPage === "profile"  ? styles.active : ""}`}>
                            <div className={styles.PagesBoxLogo}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5625 18H3.43817C2.73178 18 2.21015 17.303 2.47658 16.662C3.71276 13.698 6.61693 12 9.99985 12C13.3838 12 16.288 13.698 17.5241 16.662C17.7906 17.303 17.2689 18 16.5625 18ZM5.91667 5.99998C5.91667 3.79398 7.74899 1.99998 9.99985 1.99998C12.2517 1.99998 14.083 3.79398 14.083 5.99998C14.083 8.20599 12.2517 9.99998 9.99985 9.99998C7.74899 9.99998 5.91667 8.20599 5.91667 5.99998ZM19.9557 17.636C19.2136 14.277 16.8923 11.798 13.837 10.673C15.456 9.39596 16.4002 7.33093 16.0532 5.06993C15.651 2.44693 13.4236 0.347977 10.7348 0.0419769C7.02321 -0.381023 3.87507 2.44898 3.87507 5.99998C3.87507 7.88998 4.76929 9.57396 6.1637 10.673C3.10743 11.798 0.787164 14.277 0.044024 17.636C-0.225466 18.857 0.778998 20 2.05397 20H17.9457C19.2217 20 20.2262 18.857 19.9557 17.636Z" fill="#6F6F73"/>
                            </svg>
                            </div>
                            <div className={styles.PagesBoxText}><samp>Profile</samp></div>
                        </a>
                        <a href='companies' className={`${styles.PagesBox} ${currentPage === "companies"  ? styles.active : ""}`}>
                            <div className={styles.PagesBoxLogo}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.447 1.36339V4.70539C19.454 5.20643 19.2673 5.69083 18.9258 6.05751C18.5843 6.42419 18.1143 6.64483 17.614 6.67339C17.3616 6.68326 17.1098 6.64152 16.8741 6.55074C16.6384 6.45995 16.4236 6.32202 16.243 6.14539C16.0608 5.96926 15.916 5.75805 15.8176 5.52449C15.7191 5.29094 15.6689 5.03986 15.67 4.78639C15.67 5.28765 15.4709 5.76838 15.1165 6.12282C14.762 6.47727 14.2813 6.67639 13.78 6.67639C13.2788 6.67639 12.7981 6.47727 12.4436 6.12282C12.0892 5.76838 11.89 5.28765 11.89 4.78639C11.89 5.28765 11.6909 5.76838 11.3365 6.12282C10.982 6.47727 10.5013 6.67639 10 6.67639C9.49879 6.67639 9.01806 6.47727 8.66362 6.12282C8.30917 5.76838 8.11005 5.28765 8.11005 4.78639C8.11005 5.28765 7.91092 5.76838 7.55648 6.12282C7.20204 6.47727 6.72131 6.67639 6.22005 6.67639C5.71879 6.67639 5.23806 6.47727 4.88362 6.12282C4.52917 5.76838 4.33005 5.28765 4.33005 4.78639C4.331 5.0393 4.28093 5.28981 4.18285 5.52293C4.08476 5.75605 3.94067 5.967 3.75919 6.14316C3.57771 6.31931 3.36258 6.45706 3.12664 6.54817C2.8907 6.63927 2.63882 6.68186 2.38605 6.67339C1.88577 6.64483 1.41584 6.42419 1.07432 6.05751C0.732789 5.69083 0.546045 5.20643 0.553046 4.70539V1.36339C0.553046 1.10799 0.654505 0.863044 0.835103 0.682447C1.0157 0.501849 1.26064 0.400391 1.51605 0.400391H18.484C18.7395 0.400391 18.9844 0.501849 19.165 0.682447C19.3456 0.863044 19.447 1.10799 19.447 1.36339ZM16.843 19.6004C17.0674 19.6004 17.2826 19.5113 17.4413 19.3526C17.5999 19.1939 17.689 18.9788 17.689 18.7544V7.87039H17.536C16.8586 7.8695 16.2008 7.6425 15.667 7.22539C15.1263 7.64356 14.4621 7.87044 13.7785 7.87044C13.095 7.87044 12.4308 7.64356 11.89 7.22539C11.3486 7.64332 10.684 7.87001 10 7.87001C9.3161 7.87001 8.65145 7.64332 8.11005 7.22539C7.56932 7.64356 6.9051 7.87044 6.22155 7.87044C5.53799 7.87044 4.87377 7.64356 4.33305 7.22539C3.79418 7.64131 3.13275 7.86706 2.45205 7.86739H2.31105V18.7544C2.31105 18.8655 2.33293 18.9755 2.37544 19.0781C2.41796 19.1808 2.48028 19.274 2.55883 19.3526C2.63739 19.4312 2.73065 19.4935 2.8333 19.536C2.93594 19.5785 3.04595 19.6004 3.15705 19.6004H5.05005V13.5464H9.64905V19.6004H16.843Z" fill="#6F6F73"/>
                            </svg>
                            </div>
                            <div className={styles.PagesBoxText}><samp>Companies</samp></div>
                        </a>
                        <a href='account' className={`${styles.PagesBox} ${currentPage === "account"  ? styles.active : ""}`}>
                            <div className={styles.PagesBoxLogo}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.6223 12.004L18.0986 10.8007C17.8558 10.609 17.7211 10.3152 17.721 10.0058C17.721 10.0026 17.721 9.99927 17.721 9.99599C17.7204 9.68599 17.8553 9.39138 18.0986 9.19927L19.6223 7.99591C19.9712 7.72033 20.0947 7.2465 19.9245 6.83572L19.2552 5.21986C19.0851 4.80908 18.6628 4.56126 18.2212 4.61314L16.2928 4.8397C15.9849 4.87587 15.6812 4.7629 15.4624 4.54337C15.4601 4.54103 15.4578 4.53872 15.4555 4.53642C15.2369 4.31759 15.1244 4.01454 15.1605 3.70732L15.387 1.77908C15.4389 1.33747 15.1911 0.91517 14.7803 0.745014L13.1644 0.0757171C12.7537 -0.0944391 12.2798 0.0289984 12.0042 0.377905L10.8009 1.90154C10.6092 2.14431 10.3154 2.27908 10.006 2.27919C10.0028 2.27919 9.99948 2.27919 9.9962 2.27919C9.68623 2.27974 9.39163 2.14482 9.19952 1.90158L7.9962 0.377905C7.72061 0.0289593 7.24678 -0.0944391 6.83596 0.0757171L5.22014 0.744975C4.80936 0.915131 4.56155 1.33744 4.61342 1.77908L4.83995 3.70744C4.87612 4.01529 4.76323 4.319 4.54366 4.53779C4.54135 4.54009 4.53905 4.5424 4.5367 4.54474C4.31788 4.76341 4.01483 4.87587 3.70756 4.83974L1.77932 4.61322C1.33772 4.56134 0.915414 4.80912 0.745258 5.2199L0.0759613 6.83576C-0.094195 7.24654 0.0292425 7.72037 0.378149 7.99595L1.90182 9.19927C2.14459 9.39099 2.27936 9.68478 2.27948 9.99412C2.27948 9.9974 2.27948 10.0006 2.27948 10.0039C2.28002 10.3139 2.1451 10.6085 1.90186 10.8006L0.378149 12.004C0.0292035 12.2796 -0.094195 12.7534 0.0759613 13.1642L0.745258 14.78C0.915414 15.1908 1.33776 15.4386 1.77932 15.3867L3.70768 15.1602C4.01557 15.124 4.31924 15.237 4.53807 15.4565C4.54038 15.4588 4.54268 15.4612 4.54502 15.4635C4.76366 15.6824 4.87612 15.9854 4.84002 16.2926L4.6135 18.2209C4.56163 18.6625 4.8094 19.0848 5.22022 19.255L6.83608 19.9243C7.24686 20.0944 7.72069 19.971 7.99627 19.6221L9.19956 18.0985C9.39127 17.8557 9.6851 17.7209 9.9944 17.7208C9.99768 17.7208 10.001 17.7208 10.0042 17.7208C10.3142 17.7202 10.6088 17.8551 10.8009 18.0984L12.0043 19.6221C12.2799 19.971 12.7537 20.0945 13.1645 19.9243L14.7803 19.255C15.1911 19.0848 15.4389 18.6625 15.3871 18.2209L15.1605 16.2926C15.1243 15.9847 15.2373 15.681 15.4568 15.4622C15.4591 15.4599 15.4615 15.4576 15.4638 15.4552C15.6826 15.2366 15.9856 15.1242 16.2929 15.1602L18.2212 15.3868C18.6628 15.4386 19.0851 15.1909 19.2552 14.7801L19.9245 13.1643C20.0947 12.7534 19.9712 12.2796 19.6223 12.004ZM10.9882 12.8788C9.43819 13.5208 7.66116 12.7848 7.01916 11.2348C6.37713 9.68478 7.11319 7.90779 8.66319 7.26572C10.2132 6.62369 11.9902 7.35974 12.6323 8.90978C13.2742 10.4598 12.5382 12.2368 10.9882 12.8788Z" fill="#6F6F73"/>
                            </svg>
                            </div>
                            <div className={styles.PagesBoxText}><samp>Account</samp></div>
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
                </div>
            </div>
        </header>
    );
}
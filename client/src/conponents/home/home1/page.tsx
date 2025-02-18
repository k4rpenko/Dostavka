import styles from './style.module.scss';

export default function Home1() {
    return (
        <div className={styles.home1}>
            <div className={styles.home1Item}>
                <div className={styles.Map}>
                    <img src="/images/MapGoogle.png" alt="Map" className={styles.image} />
                </div>
                <div className={styles.HomeItem}>
                    <div className={styles.HomeItemBox}>
                        <div className={styles.Title}><p>Deliver Any Opportunity With One Load At a Time</p></div>
                        <div className={styles.HomeSVGItem}>
                            <div className={styles.HomeSVG}>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M14 2.92V11.23C14 12.25 13.17 13.08 12.15 13.08H3C2.45 13.08 2 12.63 2 12.08V5.69C2 3.65 3.65 2 5.69 2H13.07C13.59 2 14 2.41 14 2.92Z" fill="#0B4833"/> <path d="M21.5 15.5C21.78 15.5 22 15.72 22 16V17C22 18.66 20.66 20 19 20C19 18.35 17.65 17 16 17C14.35 17 13 18.35 13 20H11C11 18.35 9.65 17 8 17C6.35 17 5 18.35 5 20C3.34 20 2 18.66 2 17V15C2 14.45 2.45 14 3 14H12.5C13.88 14 15 12.88 15 11.5V6C15 5.45 15.45 5 16 5H16.84C17.56 5 18.22 5.39 18.58 6.01L19.22 7.13C19.31 7.29 19.19 7.5 19 7.5C17.62 7.5 16.5 8.62 16.5 10V13C16.5 14.38 17.62 15.5 19 15.5H21.5Z" fill="#0B4833"/> <path d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z" fill="#0B4833"/> <path d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z" fill="#0B4833"/> <path d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z" fill="#0B4833"/> </g>
                                </svg>
                            </div>
                            <div className={styles.HomeSVG}>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M21.6297 14.6608L21.2197 16.5208C20.5097 19.7208 17.9997 22.0008 14.3797 22.0008H9.61974C5.99974 22.0008 3.48974 19.7208 2.77974 16.5208L2.36974 14.6608C2.16974 13.7508 2.70974 12.7208 3.57974 12.3708L4.99974 11.8008L10.5097 9.59078C10.9897 9.40078 11.4997 9.30078 11.9997 9.30078C12.4997 9.30078 13.0097 9.40078 13.4897 9.59078L18.9997 11.8008L20.4197 12.3708C21.2897 12.7208 21.8297 13.7508 21.6297 14.6608Z" fill="#0B4833"/> <path d="M19 8V9.44C19 9.79 18.64 10.04 18.31 9.9L14.04 8.19C12.73 7.68 11.27 7.68 9.95 8.2L5.69 9.91C5.36 10.05 5 9.8 5 9.45V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8Z" fill="#0B4833"/> <path d="M14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z" fill="#0B4833"/> </g>
                                </svg>
                            </div>
                            <div className={styles.HomeSVG}>
                                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                                    <g id="SVGRepo_iconCarrier"> <path d="M20.0486 10.6286L15.3786 8.61859L14.3386 8.17859C14.1786 8.09859 14.0386 7.88859 14.0386 7.70859V4.64859C14.0386 3.68859 13.3286 2.54859 12.4686 2.10859C12.1686 1.95859 11.8086 1.95859 11.5086 2.10859C10.6586 2.54859 9.94859 3.69859 9.94859 4.65859V7.71859C9.94859 7.89859 9.80859 8.10859 9.64859 8.18859L3.94859 10.6386C3.31859 10.8986 2.80859 11.6886 2.80859 12.3686V13.6886C2.80859 14.5386 3.44859 14.9586 4.23859 14.6186L9.24859 12.4586C9.63859 12.2886 9.95859 12.4986 9.95859 12.9286V14.0386V15.8386C9.95859 16.0686 9.82859 16.3986 9.66859 16.5586L7.34859 18.8886C7.10859 19.1286 6.99859 19.5986 7.10859 19.9386L7.55859 21.2986C7.73859 21.8886 8.40859 22.1686 8.95859 21.8886L11.3386 19.8886C11.6986 19.5786 12.2886 19.5786 12.6486 19.8886L15.0286 21.8886C15.5786 22.1586 16.2486 21.8886 16.4486 21.2986L16.8986 19.9386C17.0086 19.6086 16.8986 19.1286 16.6586 18.8886L14.3386 16.5586C14.1686 16.3986 14.0386 16.0686 14.0386 15.8386V12.9286C14.0386 12.4986 14.3486 12.2986 14.7486 12.4586L19.7586 14.6186C20.5486 14.9586 21.1886 14.5386 21.1886 13.6886V12.3686C21.1886 11.6886 20.6786 10.8986 20.0486 10.6286Z" fill="#0B4833"/> </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={styles.calculator}></div>
                </div>
            </div>
        </div>
    );
}
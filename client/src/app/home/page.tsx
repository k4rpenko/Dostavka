import styles from './style.module.scss';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.home2}>
        <div className={styles.textSection}>
          <h1 className={styles.mainHeading}>Seamless Shipping Services for a Connected World</h1>
          <div className={styles.aboutCompany}>
            <span className={styles.icon}>
            <svg width="20px" height="20px" viewBox="0 0 52 52" fill="#000000" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.12,2.69A16.11,16.11,0,0,0,9.69,17a15.9,15.9,0,0,0,5.85,13.65,4.92,4.92,0,0,1,1.87,3.82v.08a4,4,0,0,0,4.05,4h9a4,4,0,0,0,4.05-4v-.08a4.92,4.92,0,0,1,1.87-3.82,15.88,15.88,0,0,0,5.93-12.24C42.36,9.09,34,1.68,24.12,2.69ZM33,43.16H19a1.56,1.56,0,0,0-1.56,1.56,4.69,4.69,0,0,0,4.68,4.68h7.8a4.69,4.69,0,0,0,4.68-4.68A1.56,1.56,0,0,0,33,43.16Z"/>
            </svg></span>
            <span>about our company</span>
          </div>
          <p className={styles.description}>
            It is a logistics intermediary company that connects carriers (companies with transport) and
            shippers (companies with goods). It organizes transportation, optimizes routes, monitors delivery,
            and ensures favorable conditions for both parties.
          </p>
        </div>
        
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img src="/svg/undraw_connected-world_anke.svg" alt="World Map" className={styles.image} />
          </div>
          <div className={styles.imageWrapper}>
            <img src="/images/container.png" alt="Shipping Container" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

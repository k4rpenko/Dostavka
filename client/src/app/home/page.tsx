import styles from './style.module.scss';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>
          <span className={styles.lang}>EN</span>
          <div className={styles.logoSvg}>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4V2M12 20V22M6.414 6.414L5 5M17.728 17.728L19.142 19.142M4 12H2M20 12H22M17.728 6.414L19.142 5M6.414 17.728L5 19.142M12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17Z" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className={styles.about}>About us</div>
        </div>
        
        <div className={styles.center}>
          <img className={styles.logoImage} src="/logo/Logo-Dark.png" alt="Logo"/>
        </div>

        <div className={styles.right}>
          <a href="/login" className={styles.authButton}>Login</a>
          <a href="/register" className={styles.authButton}>Register</a>
        </div>
      </header>
      
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h1 className={styles.mainHeading}>Seamless Shipping Services for a Connected World</h1>
          <div className={styles.aboutCompany}>
            <span className={styles.icon}>💡</span>
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
            <img src="/svg/undraw_connected-world_anke.svg" alt="Shipping Container" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
}

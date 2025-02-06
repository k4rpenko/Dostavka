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
  <a href="/login" className={styles.authButton}>
    Login 
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
  <a href="/register" className={styles.authButton}>
    Register 
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z" fill="#fff" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </a>
</div>

      </header>
      
      <div className={styles.content}>
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

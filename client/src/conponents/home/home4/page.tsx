import styles from './style.module.scss';

export default function Home4() {
  return (
    <div className={styles.home4}>
      <h2 className={styles.title}>
        Discover The Full Range Of Services We Offer For Shipping
      </h2>
      <div className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <img src="/images/ship.jpg" alt="Sea Freight" className={styles.serviceImage} />
          <div className={styles.overlay}>
            <p className={styles.text}>Reliable Sea Freight Options For Cost-Effective</p>
          </div>
        </div>

        <div className={styles.serviceCard}>
          <img src="/images/airplane.jpg" alt="Air Cargo" className={styles.serviceImage} />
          <div className={styles.overlay}>
            <p className={styles.text}>Swift And Efficient Air Cargo Services That Connect You</p>
          </div>
        </div>

        <div className={styles.serviceCardFull}>
          <img src="/images/truck.jpg" alt="Ground Transport" className={styles.serviceImage} />
          <div className={styles.overlay}>
            <p className={styles.text}>Seamless Ground Transportation For A Well-Rounded Shipping Experience</p>
          </div>
        </div>
      </div>
    </div>
    );
}
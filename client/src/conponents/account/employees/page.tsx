import styles from './style.module.scss';

export default function Employees() {
    return (
        <div className={styles.gallery}>
            <img src="/images/employees1.jpg" alt="Gallery Image 1" className={styles.image} />
            <img src="/images/employees2.jpg" alt="Gallery Image 2" className={styles.image} />
            <img src="/images/employees3.jpeg" alt="Gallery Image 3" className={styles.image} />
            <img src="/images/employees4.jpeg" alt="Gallery Image 4" className={styles.image} />
            <img src="/images/employees5.jpg" alt="Gallery Image 5" className={styles.image} />
            <img src="/images/employees6.jpg" alt="Gallery Image 6" className={styles.image} />
        </div>
    );
}
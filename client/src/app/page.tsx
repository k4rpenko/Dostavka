 import Link from 'next/link';
 import styles from './style.module.scss';

 export default function Home() {
   return (
     <div className={styles.container}>
       <h1 className={styles.title}>Welcome to Dostavka</h1>
       <p className={styles.description}>Your reliable delivery service platform</p>
       <div className={styles.linkContainer}>
         <Link href="/register/director" className={styles.link}>
           Register as Director
         </Link>
       </div>
     </div>
   );
 }

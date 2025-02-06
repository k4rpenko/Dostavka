import styles from './style.module.scss';
import Home2 from "@/conponents/home/home2/page";
import Home3 from "@/conponents/home/home3/page";

export default function Home() {
    return (
        <div className={styles.appContainer}>
            <Home2 />
            <Home3 />
        </div>
    );
}


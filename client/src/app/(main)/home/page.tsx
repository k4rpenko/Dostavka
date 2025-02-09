import styles from './style.module.scss';
import Home2 from "@/conponents/home/home2/page";
import Home3 from "@/conponents/home/home3/page";
import Home4 from "@/conponents/home/home4/page";

export default function Home() {
    return (
        <div className={styles.appContainer}>
            <Home2 />
            <Home3 />
            <Home4 />
        </div>
    );
}


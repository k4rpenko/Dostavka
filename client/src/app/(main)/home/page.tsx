import styles from './style.module.scss';
import Home2 from "@/conponents/home/home2/page";
import Home3 from "@/conponents/home/home3/page";
import Home1 from "@/conponents/home/home1/page";

export default function Home() {
    return (
        <div className={styles.appContainer}>
            <Home1 />
            <Home2 />
            <Home3 />
        </div>
    );
}


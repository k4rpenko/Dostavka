import styles from "./style.module.scss";
import MapModule from "@/conponents/carriers/Map/Map";


export default function Map() {

    return (
        <div className={styles.appContainer}>
            <div className={styles.Map}>
                <MapModule/>
            </div>
        </div>
    );
}
import { PostModel } from '@/data/Module/Chats';
import styles from './style.module.scss';

export default function Employees({ posts }: PostModel) {
    return (
        <>
            {posts.map((item, index) => (
                <div key={index} className={styles.gallery}>
                    <img src={item.image} alt="Gallery Image" className={styles.image} />
                </div>
            ))}
        </>
    );
}
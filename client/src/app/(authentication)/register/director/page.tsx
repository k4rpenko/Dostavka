import styles from './style.module.css';

export default function Home() {
    return (
        <div className={styles.appContainer}>
            {/* Блок зображення */}
            <div className={styles.appImage}>
                <img src="/Images/RegiserCar.jpeg" alt="background" />
            </div>

            <div className={styles.appRegister}>
                <div>
                    <h2>Registration</h2>
                    <p>Join us right now</p>
                    <form>
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Company Name & Address" />
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Phone Number" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <label>
                            <input type="checkbox" /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        <button type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

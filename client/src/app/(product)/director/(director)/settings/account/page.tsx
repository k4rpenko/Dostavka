"use client";

import styles from "./style.module.scss";

export default function Account() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Change password</h2>
      <form className={styles.form}>
        <label>Old password</label>
        <input type="password" placeholder="old password" required />

        <label>Password</label>
        <input type="password" placeholder="password" required />

        <label>Confirm password</label>
        <input type="password" placeholder="confirm password" required />
    
        <button type="submit" className={styles.button}>Save</button>
      </form>
    </div>
  );
}

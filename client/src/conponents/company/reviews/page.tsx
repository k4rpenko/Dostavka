import React from "react";
import styles from "./style.module.scss";

const reviews = [
  {
    name: "Oleksandr Petrenko",
    text: "We've been working with DOSTAVKA for over a year, and they consistently deliver our products on time and in perfect condition. The support team is top-notch – always ready to assist with any questions. Highly recommend for businesses in need of reliable logistics!",
  },
  {
    name: "Maria John",
    text: "I used the document delivery service abroad. Everything went smoothly and quickly. The courier arrived exactly on time, and the documents were delivered to the recipient without any delays. Thank you for your professionalism!",
  },
];

export default function Reviews() {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
        {reviews.map((reviews, index) => (
          <div key={index} className={styles.card}>
            <div ><img src="/images/img.png" alt="Containers" className={styles.avatar} />
            </div>
            <div className={styles.text}>
              <strong>{reviews.name}</strong>
              <p>{reviews.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

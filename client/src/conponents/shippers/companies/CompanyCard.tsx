"use client";
import React from 'react';
import styles from './style.module.scss';

interface CompanyProps {
  id: string;
  title: string;
  avatar: string;
  rating: number;
  workersNumber: number;
  transportationNumber: number;
  email: string;
  phoneNumber: string;
}

const CompanyCard: React.FC<CompanyProps> = ({ 
  id, 
  title, 
  avatar, 
  rating, 
  workersNumber, 
  transportationNumber,
  email,
  phoneNumber
}) => {
  return (
    <div className={styles.companyCard}>
      <div className={styles.companyLogo}>
        <img src={avatar || '/logo/default-company.png'} alt={title} />
      </div>
      <div className={styles.companyInfo}>
        <h3 className={styles.companyTitle}>{title || 'Unnamed Company'}</h3>
        <div className={styles.companyStats}>
          <div className={styles.rating}>
            <span>Рейтинг: {rating ? rating.toFixed(1) : 'N/A'}</span>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={star <= Math.round(rating || 0) ? styles.filledStar : styles.emptyStar}>★</span>
              ))}
            </div>
          </div>
          <div className={styles.stat}>
            <span>Працівників: {workersNumber || 0}</span>
          </div>
          <div className={styles.stat}>
            <span>Перевезень: {transportationNumber || 0}</span>
          </div>
          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <span>Email: {email}</span>
            </div>
            <div className={styles.contactItem}>
              <span>Телефон: {phoneNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;

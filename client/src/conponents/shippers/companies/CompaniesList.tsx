"use client";
import React, { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import styles from './style.module.scss';

interface Company {
  id: string;
  title: string;
  avatar: string;
  rating: number;
  workersNumber: number;
  transportationNumber: number;
  email: string;
  phoneNumber: string;
}

const CompaniesList = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('/api/companies');
        if (!response.ok) {
          throw new Error('Помилка завантаження даних');
        }
        const data = await response.json();
        setCompanies(data);
        setLoading(false);
      } catch (err) {
        setError('Не вдалося завантажити компанії. Спробуйте пізніше.');
        setLoading(false);
        console.error('Помилка отримання компаній:', err);
      }
    };

    fetchCompanies();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Завантаження компаній...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (companies.length === 0) {
    return <div className={styles.noCompanies}>Компаній не знайдено.</div>;
  }

  return (
    <div className={styles.companiesContainer}>
      <h2 className={styles.heading}>Компанії-перевізники</h2>
      <div className={styles.companiesList}>
        {companies.map((company) => (
          <CompanyCard 
            key={company.id}
            id={company.id}
            title={company.title}
            avatar={company.avatar}
            rating={company.rating}
            workersNumber={company.workersNumber}
            transportationNumber={company.transportationNumber}
            email={company.email}
            phoneNumber={company.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
};

export default CompaniesList;

"use client";

import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

const UsersJSON = [
  { id: 1, UserName: "Петренко Іван Олександрович", Email: "ivan.petrenko@gmail.com", PhoneNumber: "0674827315", Role: "Junior Logist", Rating: 5 },
  { id: 2, UserName: "Сидоренко Ольга Михайлівна", Email: "olga.sydorenko@gmail.com", PhoneNumber: "0683214567", Role: "Middle Logist", Rating: 4 },
  { id: 3, UserName: "Коваленко Андрій Сергійович", Email: "andriy.kovalenko@gmail.com", PhoneNumber: "0639876543", Role: "Senior Logist", Rating: 5 },
  { id: 4, UserName: "Мельник Тетяна Василівна", Email: "t.melnyk@gmail.com", PhoneNumber: "0636676543", Role: "Dispatcher", Rating: 4 },
  { id: 5, UserName: "Гончаренко Максим Віталійович", Email: "max.goncharenko@gmail.com", PhoneNumber: "0683214587", Role: "Manager", Rating: 5 }
];
const truckJSON = [
  { id: 1, CarNumber: "AH1057DN", status: 1, country: "Ukraine", Car: 4 },
  { id: 2, CarNumber: "HT1089JH", status: 0, country: "Slovakian", Car: 1 },
  { id: 3, CarNumber: "UT1769GH", status: 0, country: "Slovakian", Car: 3 },
  { id: 4, CarNumber: "AI7857ON", status: 1, country: "Ukraine", Car: 4 },


];

const CarsImageId = [
  { id: 1, TypeCar: "Cargo Van", image: "/images/cars/white/Cargo%20Van.svg" },
  { id: 2, TypeCar: "Passenger Van", image: "/images/cars/white/Passenger%20Van.svg" },
  { id: 3, TypeCar: "Small Flatbed Truck", image: "/images/cars/white/Small%20Curtain-Side%20Truck.svg" },
  { id: 4, TypeCar: "Box Truck", image: "/images/cars/white/Small%20Curtain-Side%20Truck.svg" },
  { id: 5, TypeCar: "Tanker Truck", image: "/images/cars/white/Tanker%20Truck.svg" },
  { id: 6, TypeCar: "Large Box Truck", image: "/images/cars/white/Large%20Box%20Truck%20Container.svg" },
  { id: 7, TypeCar: "Small Curtain-Side Truck", image: "/images/cars/white/Small%20Curtain-Side%20Truck.svg" },
  { id: 8, TypeCar: "Container Truck", image: "/images/cars/white/Cargo%20Van.svg" },
  { id: 9, TypeCar: "Large Box Truck Container", image: "/images/cars/white/Large%20Box%20Truck%20Container.svg" },
];

const ButtonsJSON = [
  { id: 1, TypeCar: "Cargo Van" },
  { id: 2, TypeCar: "Passenger Van" },
  { id: 3, TypeCar: "Small Flatbed Truck" },
  { id: 4, TypeCar: "Box Truck" },
  { id: 5, TypeCar: "Tanker Truck" },
  { id: 6, TypeCar: "Large Box Truck" },
  { id: 7, TypeCar: "Small Curtain-Side Truck" },
  { id: 8, TypeCar: "Container Truck" },
  { id: 9, TypeCar: "Large Box Truck" },
];

export default function WorkerDetails() {
  const router = useRouter();
  const params = useParams();
  const [user, setWorker] = useState<any>(null);

  useEffect(() => {
    const id = Number(params.id);
    const foundWorker = UsersJSON.find(user => user.id === id);
    setWorker(foundWorker);
  }, [params.id]);

  if (!user) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>User Info</h2>
        </div>
      <div className={styles.card}>
        <div className={styles.avatar}>
          <img src="/images/img.png" alt="avatar" />
        </div>
        <h3 className={styles.name}>{user.UserName}</h3>
        <span className={styles.role}>{user.Role}</span>
        <div className={styles.rating}>
            <svg width="69" height="20" viewBox="0 0 57 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z" fill="#FFCB45"/>
                <path d="M16.5 0L18.0296 2.60796L21 3.24671L18.975 5.49727L19.2812 8.5L16.5 7.28296L13.7188 8.5L14.025 5.49727L12 3.24671L14.9704 2.60796L16.5 0Z" fill="#FFCB45"/>
                <path d="M28.5 0L30.0296 2.60796L33 3.24671L30.975 5.49727L31.2812 8.5L28.5 7.28296L25.7188 8.5L26.025 5.49727L24 3.24671L26.9704 2.60796L28.5 0Z" fill="#FFCB45"/>
                <path d="M40.5 0L42.0296 2.60796L45 3.24671L42.975 5.49727L43.2812 8.5L40.5 7.28296L37.7188 8.5L38.025 5.49727L36 3.24671L38.9704 2.60796L40.5 0Z" fill="#FFCB45"/>
                <path d="M52.5 0L54.0296 2.60796L57 3.24671L54.975 5.49727L55.2812 8.5L52.5 7.28296L49.7188 8.5L50.025 5.49727L48 3.24671L50.9704 2.60796L52.5 0Z" fill="#F2F2F2"/>
            </svg>
        </div>        
        <div className={styles.info}>
        <div className={styles.item}>
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3.00005L8.2 7.65C9.2667 8.45 10.7333 8.45 11.8 7.65L18 3" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 1H3C1.89543 1 1 1.89543 1 3V13C1 14.1046 1.89543 15 3 15H17C18.1046 15 19 14.1046 19 13V3C19 1.89543 18.1046 1 17 1Z" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>{user.Email}</span>
        </div>
        <div className={styles.item}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.05 5C13.0268 5.19057 13.9244 5.66826 14.6281 6.37194C15.3318 7.07561 15.8095 7.97326 16 8.95M12.05 1C14.0793 1.22544 15.9716 2.13417 17.4163 3.57701C18.8609 5.01984 19.7721 6.91101 20 8.94M16.5 20C7.93959 20 1 13.0604 1 4.5C1 4.11378 1.01413 3.73086 1.04189 3.35173C1.07375 2.91662 1.08968 2.69907 1.2037 2.50103C1.29814 2.33701 1.4655 2.18146 1.63598 2.09925C1.84181 2 2.08188 2 2.56201 2H5.37932C5.78308 2 5.98496 2 6.15802 2.06645C6.31089 2.12515 6.44701 2.22049 6.55442 2.3441C6.67601 2.48403 6.745 2.67376 6.88299 3.05321L8.0491 6.26005C8.2096 6.70153 8.2899 6.92227 8.2763 7.1317C8.2643 7.31637 8.2012 7.49408 8.0942 7.64506C7.97286 7.81628 7.77145 7.93713 7.36863 8.17882L6 9C7.2019 11.6489 9.3501 13.7999 12 15L12.8212 13.6314C13.0629 13.2285 13.1837 13.0271 13.3549 12.9058C13.5059 12.7988 13.6836 12.7357 13.8683 12.7237C14.0777 12.7101 14.2985 12.7904 14.74 12.9509L17.9468 14.117C18.3262 14.255 18.516 14.324 18.6559 14.4456C18.7795 14.553 18.8749 14.6891 18.9335 14.842C19 15.015 19 15.2169 19 15.6207V18.438C19 18.9181 19 19.1582 18.9007 19.364C18.8185 19.5345 18.663 19.7019 18.499 19.7963C18.3009 19.9103 18.0834 19.9262 17.6483 19.9581C17.2691 19.9859 16.8862 20 16.5 20Z" stroke="#3A3A3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>{user.PhoneNumber}</span>
        </div>
      </div>
        <div className={styles.Trucks}>
            {truckJSON.map((truck, index) => (
              <a key={index} className={styles.Truck}>
                <div className={styles.TruckHeader}>
                  <div className={styles.TruckTitle}>
                    <div className={styles.TruckTitleOne}>
                      <h2>{truck.CarNumber}</h2>
                    </div>
                    {truck.status === 1 ? (
                      <p className={styles.TruckTitleWork}>◉ Work</p>
                    ) : (
                      <p className={styles.TruckTitleRoute}>◉ On Route</p>
                      )}
                    </div>
                  </div>
                  <div className={styles.TruckMain}>
                    <div className={styles.TruckMainCar}>
                      <div className={styles.TruckMainCarShadow}></div>
                        <img
                          src={
                              CarsImageId.find((u) => u.id === truck.Car)?.image ||
                              "default-image.jpg"
                          }
                          alt="Car Image"
                        />
                      </div>
                    </div>
                </a>
                
                  ))}
      <button className={styles.addButton} >
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_762_3617)">
        <rect width="50" height="50" rx="25" fill="#0A84FF"/>
        <path d="M27.1528 17.5349V24.7485C27.1528 25.6339 26.4323 26.3544 25.5468 26.3544H17.6041C17.1267 26.3544 16.7361 25.9638 16.7361 25.4863V19.9395C16.7361 18.1686 18.1684 16.7363 19.9392 16.7363H26.3455C26.7968 16.7363 27.1528 17.0922 27.1528 17.5349Z" fill="white"/>
        <path d="M33.6632 28.4544C33.9062 28.4544 34.0972 28.6454 34.0972 28.8885V29.7565C34.0972 31.1975 32.934 32.3607 31.493 32.3607C31.493 30.9284 30.3212 29.7565 28.8889 29.7565C27.4566 29.7565 26.2847 30.9284 26.2847 32.3607H24.5486C24.5486 30.9284 23.3767 29.7565 21.9444 29.7565C20.5121 29.7565 19.3403 30.9284 19.3403 32.3607C17.8993 32.3607 16.7361 31.1975 16.7361 29.7565V28.0204C16.7361 27.543 17.1267 27.1523 17.6041 27.1523H25.8507C27.0486 27.1523 28.0208 26.1801 28.0208 24.9822V20.2079C28.0208 19.7305 28.4114 19.3398 28.8889 19.3398H29.618C30.243 19.3398 30.8159 19.6784 31.1284 20.2166L31.684 21.1888C31.7621 21.3277 31.658 21.51 31.493 21.51C30.2951 21.51 29.3229 22.4822 29.3229 23.6801V26.2843C29.3229 27.4822 30.2951 28.4544 31.493 28.4544H33.6632Z" fill="white"/>
        <path d="M21.9444 34.0972C22.9032 34.0972 23.6805 33.32 23.6805 32.3611C23.6805 31.4023 22.9032 30.625 21.9444 30.625C20.9855 30.625 20.2083 31.4023 20.2083 32.3611C20.2083 33.32 20.9855 34.0972 21.9444 34.0972Z" fill="white"/>
        <path d="M28.8889 34.0972C29.8478 34.0972 30.6251 33.32 30.6251 32.3611C30.6251 31.4023 29.8478 30.625 28.8889 30.625C27.9301 30.625 27.1528 31.4023 27.1528 32.3611C27.1528 33.32 27.9301 34.0972 28.8889 34.0972Z" fill="white"/>
        <path d="M34.0972 25.8767V27.1528H31.4931C31.0156 27.1528 30.625 26.7622 30.625 26.2847V23.6806C30.625 23.2031 31.0156 22.8125 31.4931 22.8125H32.6128L33.8715 25.0174C34.0191 25.2778 34.0972 25.5729 34.0972 25.8767Z" fill="white"/>
        <path d="M-285 -148.667C-285 -222.305 -225.305 -282 -151.667 -282H181.667C255.303 -282 315 -222.305 315 -148.667V184.667C315 258.303 255.303 318 181.667 318H-151.667C-225.305 318 -285 258.303 -285 184.667V-148.667Z" stroke="black" stroke-width="66.6667"/>
        <path d="M157.463 -10.7441C170.48 -23.7607 170.48 -44.8674 157.463 -57.8841L97.7434 -117.604C84.7267 -130.622 63.62 -130.621 50.6034 -117.604L-86.298 19.2959L-106.744 142.923C-107.117 145.179 -105.161 147.133 -102.907 146.756L20.5634 126.159L157.463 -10.7441Z" stroke="black" stroke-width="66.6667"/>
        </g>
        <defs>
        <clipPath id="clip0_762_3617">
        <rect width="50" height="50" rx="25" fill="white"/>
        </clipPath>
        </defs>
      </svg>

        Add car
      </button>
        </div>
      </div>

      <button className={styles.backButton} onClick={() => router.push("/director/settings/workers")}>
        Back
      </button>
    </div>
  );
}

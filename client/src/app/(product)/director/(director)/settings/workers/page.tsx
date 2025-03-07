"use client";

import { useRouter } from "next/navigation";
import styles from "./style.module.scss";

export default function Workers() {
  const router = useRouter();

  const UsersJSON = [
    { id: 1, UserName: "Петренко Іван Олександрович", Email: "ivan.petrenko@gmail.com", PhoneNumber: "0674827315", Role: "Junior Logist", Rating: 5 },
    { id: 2, UserName: "Сидоренко Ольга Михайлівна", Email: "olga.sydorenko@gmail.com", PhoneNumber: "0683214567", Role: "Middle Logist", Rating: 4 },
    { id: 3, UserName: "Коваленко Андрій Сергійович", Email: "andriy.kovalenko@gmail.com", PhoneNumber: "0639876543", Role: "Senior Logist", Rating: 5 },
    { id: 4, UserName: "Мельник Тетяна Василівна", Email: "t.melnyk@gmail.com", PhoneNumber: "0636676543", Role: "Dispatcher", Rating: 4 },
    { id: 5, UserName: "Гончаренко Максим Віталійович", Email: "max.goncharenko@gmail.com", PhoneNumber: "0683214587", Role: "Manager", Rating: 5 }
  ];

  const handleRowClick = (id: number) => {
    router.push(`/director/settings/workers/${id}`);
  };

    return (
        <div className={styles.container}>
            <div className={styles.panel}>
              <h2 className={styles.title}>All workers</h2>
              <div className={styles.buttonsPanel}>
                <div className={styles.inputContainer}>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" 
                      stroke="var(--grey)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                  <input type="text" placeholder="find workers" className={styles.input} />
                </div>
                <div className={styles.buttonGroup}>
                <div className={styles.dropdown}>
                  <details className={styles.details}>
                    <summary className={styles.button}>
                      <svg width="15px" height="15px" fill="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={styles.icon}>
                          <path d="M22,4.5a1,1,0,0,1-1,1H12a1,1,0,0,1,0-2h9A1,1,0,0,1,22,4.5Zm-1,4H14a1,1,0,0,0,0,2h7a1,1,0,0,0,0-2Zm0,5H16a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2Zm0,5H18a1,1,0,0,0,0,2h3a1,1,0,0,0,0-2ZM6,2A1,1,0,0,0,5,3V18.586L3.707,17.293a1,1,0,0,0-1.414,1.414l3,3a1,1,0,0,0,1.416,0l3-3a1,1,0,0,0-1.414-1.414L7,18.586V3A1,1,0,0,0,6,2Z"/>
                      </svg>
                      Filters
                    </summary>
                    <div className={styles.dropdownMenu}>
                      <label><input type="checkbox" /> 1</label>
                      <label><input type="checkbox" /> 2</label>
                      <label><input type="checkbox" /> 3</label>
                    </div>
                  </details>
                </div>
                <button className={styles.button}>
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 5.1834C13.75 7.35575 11.9817 9.11681 9.80044 9.11681C9.40244 9.11681 8.49619 9.02531 8.05531 8.65944L7.50419 9.20831C7.18019 9.531 7.26769 9.626 7.41181 9.7825C7.47194 9.84781 7.542 9.92381 7.59606 10.0316C7.59606 10.0316 8.05531 10.6719 7.59606 11.3122C7.3205 11.6781 6.54894 12.1903 5.66721 11.3122L5.48351 11.4951C5.48351 11.4951 6.03461 12.1354 5.57536 12.7758C5.29981 13.1417 4.56502 13.5076 3.92207 12.8673L3.27912 13.5076C2.83824 13.9466 2.29941 13.6905 2.0851 13.5076L1.53401 12.9587C1.01964 12.4464 1.31969 11.8915 1.53401 11.6781L6.31019 6.92144C6.31019 6.92144 5.85094 6.18961 5.85094 5.1834C5.85094 3.01104 7.61919 1.25 9.80044 1.25C11.9817 1.25 13.75 3.01104 13.75 5.1834ZM9.80062 6.55556C10.5615 6.55556 11.1783 5.94126 11.1783 5.18346C11.1783 4.42566 10.5615 3.81134 9.80062 3.81134C9.03969 3.81134 8.42287 4.42566 8.42287 5.18346C8.42287 5.94126 9.03969 6.55556 9.80062 6.55556Z" fill="#3A3A3C"/>
                </svg>
                  Get key
                </button>
              </div>
            </div>
            </div>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Full name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                    <th>Role</th>
                    <th>Rating</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {UsersJSON.map((user) => (
                  <tr key={user.id} onClick={() => handleRowClick(user.id)} className={styles.clickableRow}>
                      <td>
                        <div className={styles.info}>
                          <img src="/images/img.png" alt="avatar" className={styles.avatar}/>

                          <div className={styles.textContainer}>
                            <span className={styles.name}>{user.UserName}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                      <div className={styles.textContainer}>
                            <span className={styles.email}>{user.Email}</span>
                          </div>
                      </td>
                      <td>
                        <div className={styles.phone}>
                          <span>{user.PhoneNumber}</span>
                        </div>
                      </td>
                      <td>
                        <div className={styles.icon}>
                          <div className={styles.Role}>
                            <p>{user.Role}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={styles.ratingContainer}>
                          <div className={styles.rating}><svg width="69" height="20" viewBox="0 0 57 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 0L6.02963 2.60796L9 3.24671L6.975 5.49727L7.28115 8.5L4.5 7.28296L1.71885 8.5L2.025 5.49727L0 3.24671L2.97037 2.60796L4.5 0Z" fill="#FFCB45"/>
                            <path d="M16.5 0L18.0296 2.60796L21 3.24671L18.975 5.49727L19.2812 8.5L16.5 7.28296L13.7188 8.5L14.025 5.49727L12 3.24671L14.9704 2.60796L16.5 0Z" fill="#FFCB45"/>
                            <path d="M28.5 0L30.0296 2.60796L33 3.24671L30.975 5.49727L31.2812 8.5L28.5 7.28296L25.7188 8.5L26.025 5.49727L24 3.24671L26.9704 2.60796L28.5 0Z" fill="#FFCB45"/>
                            <path d="M40.5 0L42.0296 2.60796L45 3.24671L42.975 5.49727L43.2812 8.5L40.5 7.28296L37.7188 8.5L38.025 5.49727L36 3.24671L38.9704 2.60796L40.5 0Z" fill="#FFCB45"/>
                            <path d="M52.5 0L54.0296 2.60796L57 3.24671L54.975 5.49727L55.2812 8.5L52.5 7.28296L49.7188 8.5L50.025 5.49727L48 3.24671L50.9704 2.60796L52.5 0Z" fill="#F2F2F2"/>
                          </svg>
                          </div>
                        </div>
                      </td>
                      <td>
                        <button className={styles.button}>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.25 7.5V10.625" stroke="#3A3A3C" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.75 7.5V10.625" stroke="#3A3A3C" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.5 4.375H12.5" stroke="#3A3A3C" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.75 6.25V11.25C3.75 12.2856 4.58947 13.125 5.625 13.125H9.375C10.4106 13.125 11.25 12.2856 11.25 11.25V6.25" stroke="#3A3A3C" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M5.625 3.125C5.625 2.43464 6.18464 1.875 6.875 1.875H8.125C8.81537 1.875 9.375 2.43464 9.375 3.125V4.375H5.625V3.125Z" stroke="#3A3A3C" stroke-width="1.104" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>  
                            Delete                
                        </button>
                      </td>
                    </tr>
                ))}

                </tbody>

              </table>
            </div>
        </div>
    );
}

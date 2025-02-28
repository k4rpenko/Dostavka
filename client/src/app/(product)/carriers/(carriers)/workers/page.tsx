import React from "react";
import styles from "./style.module.scss";

export default function Workers() {
  const UsersJSON = [
    { id: 1, UserName: "Іван Іван Іван", Email: "one@gmail.com", Transportation: 20, Role: "Junior Logist", OnlineChats: 5, raiting: 2.3},
    { id: 2, UserName: "Макс Макс Макс", Email: "Макс@gmail.com", Transportation: 50, Role: "Senior Logist", OnlineChats: 17, raiting: 4.3},
  ];

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Workers</h1>
              <p className={styles.description}>Manage your team members and their account permissions here</p>
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
                    <th>Transportation</th>
                    <th>Role</th>
                    <th>People Online</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody>
                {UsersJSON.map((user, index) => (
                    <tr>
                      <td>
                        <div className={styles.info}>
                          <img src="/images/img.png" alt="avatar" className={styles.avatar}/>

                          <div className={styles.textContainer}>
                            <span className={styles.name}>{user.UserName}</span>
                            <span className={styles.email}>{user.Email}</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className={styles.info}>
                          <div className={styles.icon}><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.8333 9.375C21.1096 9.375 21.3746 9.26525 21.5699 9.0699C21.7653 8.87455 21.875 8.6096 21.875 8.33333V4.16667C21.875 3.8904 21.7653 3.62545 21.5699 3.4301C21.3746 3.23475 21.1096 3.125 20.8333 3.125H16.6667C16.3904 3.125 16.1254 3.23475 15.9301 3.4301C15.7347 3.62545 15.625 3.8904 15.625 4.16667V5.20833H9.375V4.16667C9.375 3.8904 9.26525 3.62545 9.0699 3.4301C8.87455 3.23475 8.6096 3.125 8.33333 3.125H4.16667C3.8904 3.125 3.62545 3.23475 3.4301 3.4301C3.23475 3.62545 3.125 3.8904 3.125 4.16667V8.33333C3.125 8.6096 3.23475 8.87455 3.4301 9.0699C3.62545 9.26525 3.8904 9.375 4.16667 9.375H5.20833V15.625H4.16667C3.8904 15.625 3.62545 15.7347 3.4301 15.9301C3.23475 16.1254 3.125 16.3904 3.125 16.6667V20.8333C3.125 21.1096 3.23475 21.3746 3.4301 21.5699C3.62545 21.7653 3.8904 21.875 4.16667 21.875H8.33333C8.6096 21.875 8.87455 21.7653 9.0699 21.5699C9.26525 21.3746 9.375 21.1096 9.375 20.8333V19.7917H15.625V20.8333C15.625 21.1096 15.7347 21.3746 15.9301 21.5699C16.1254 21.7653 16.3904 21.875 16.6667 21.875H20.8333C21.1096 21.875 21.3746 21.7653 21.5699 21.5699C21.7653 21.3746 21.875 21.1096 21.875 20.8333V16.6667C21.875 16.3904 21.7653 16.1254 21.5699 15.9301C21.3746 15.7347 21.1096 15.625 20.8333 15.625H19.7917V9.375H20.8333ZM17.7083 15.625H16.6667C16.3904 15.625 16.1254 15.7347 15.9301 15.9301C15.7347 16.1254 15.625 16.3904 15.625 16.6667V17.7083H9.375V16.6667C9.375 16.3904 9.26525 16.1254 9.0699 15.9301C8.87455 15.7347 8.6096 15.625 8.33333 15.625H7.29167V9.375H8.33333C8.6096 9.375 8.87455 9.26525 9.0699 9.0699C9.26525 8.87455 9.375 8.6096 9.375 8.33333V7.29167H15.625V8.33333C15.625 8.6096 15.7347 8.87455 15.9301 9.0699C16.1254 9.26525 16.3904 9.375 16.6667 9.375H17.7083V15.625Z" fill="#6F6F73"/>
                          </svg>
                          </div>
                          <span>{user.Transportation}</span>
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
                        <div className={styles.info}>
                          <div className={styles.icon}>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.2166 6.74476C15.1558 6.73608 15.0951 6.73608 15.0343 6.74476C13.6888 6.70136 12.6211 5.59893 12.6211 4.24476C12.6211 2.86456 13.7409 1.73608 15.1298 1.73608C16.51 1.73608 17.6385 2.85588 17.6385 4.24476C17.6298 5.59893 16.5621 6.70136 15.2166 6.74476Z" fill="#3A3A3C"/>
                              <path d="M18.0473 12.7607C17.0751 13.4117 15.7122 13.6548 14.4536 13.4899C14.7834 12.778 14.957 11.9881 14.9657 11.1548C14.9657 10.2867 14.7747 9.46207 14.4102 8.74159C15.6949 8.56798 17.0577 8.81103 18.0386 9.46207C19.4102 10.3649 19.4102 11.8492 18.0473 12.7607Z" fill="#3A3A3C"/>
                              <path d="M5.59093 6.74476C5.65169 6.73608 5.71246 6.73608 5.77322 6.74476C7.11871 6.70136 8.18641 5.59893 8.18641 4.24476C8.18641 2.85588 7.06662 1.73608 5.67773 1.73608C4.29753 1.73608 3.17773 2.85588 3.17773 4.24476C3.17773 5.59893 4.24544 6.70136 5.59093 6.74476Z" fill="#3A3A3C"/>
                              <path d="M5.68641 11.1549C5.68641 11.997 5.86871 12.7956 6.19857 13.5161C4.97461 13.6463 3.69857 13.3859 2.76107 12.7695C1.38954 11.8581 1.38954 10.3737 2.76107 9.46224C3.68989 8.83724 5.00065 8.5855 6.23329 8.72439C5.87739 9.45356 5.68641 10.2782 5.68641 11.1549Z" fill="#3A3A3C"/>
                              <path d="M10.5209 13.776C10.4514 13.7674 10.3733 13.7674 10.2952 13.776C8.69793 13.724 7.42188 12.4132 7.42188 10.7986C7.43056 9.14931 8.7587 7.8125 10.4167 7.8125C12.066 7.8125 13.4028 9.14931 13.4028 10.7986C13.3941 12.4132 12.1268 13.724 10.5209 13.776Z" fill="#3A3A3C"/>
                              <path d="M7.69987 15.5734C6.38911 16.4501 6.38911 17.8911 7.69987 18.7592C9.19294 19.7574 11.6409 19.7574 13.1339 18.7592C14.4447 17.8824 14.4447 16.4415 13.1339 15.5734C11.6495 14.5751 9.20162 14.5751 7.69987 15.5734Z" fill="#3A3A3C"/>
                            </svg>
                          </div>
                          <span>{user.OnlineChats}</span>
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
                    </tr>
                ))}

                </tbody>

              </table>
            </div>
        </div>
    );
}

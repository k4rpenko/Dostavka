import styles from "@/app/(product)/carriers/cars/style.module.scss";

export default function Notification() {

    const NotificationJSON = [
        { id: 1, Title: "Your cargo has arrived", Text: "Cargo with track number 00000 arrived in London for ATB", status: 0,},
        { id: 2, Title: "You can't keep up with the load", Text: "Cargo with track number 00000 did not arrive at the specified time in London for ATB", status: 1,},
        { id: 3, Title: "Your driver has been involved in an accident", Text: "The truck with the license plate VK0284MN was involved in an accident in Paris, the logistician who was driving the cargo is NAME NAME, the driver is NAME NAME", status: 2,},
    ];
    return (
        <div className={styles.appContainer}>
        </div>
    );
}
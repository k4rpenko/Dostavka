import {redirect} from "next/navigation";

export default function Home() {
    redirect("/shippers/map");

    return (
        <div>
        </div>
    );
}
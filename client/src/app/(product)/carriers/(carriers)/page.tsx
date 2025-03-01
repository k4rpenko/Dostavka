import {redirect} from "next/navigation";

export default function Home() {
    redirect("/carriers/map");

    return (
        <div>
        </div>
    );
}
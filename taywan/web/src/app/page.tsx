import Image from "next/image";
import Login from "./login/page";

export default function Home() {
  return (
   <div className="h-full border border-red-400">
        <Login />
   </div>
  );
}

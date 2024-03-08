import NavBar from "@/components/NavBar";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen w-full">
        <div className={`${bungee.className} text-4xl`}>Home Page</div>
      </div>
    </>
  );
}

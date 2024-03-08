import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="flex text-4xl justify-center items-center h-screen w-full">
        <div>Home Page</div>
      </div>
    </>
  );
}

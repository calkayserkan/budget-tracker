"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/auth/login");
  };
  return (
    <div className="flex flex-col w-dvw h-full justify-center items-center bg-alabaster ">
      <div className=" w-full h-screen flex flex-col justify-center items-center">
        <div className="max-w-4xl p-2 flex flex-col justify-center items-center gap-2">
          <p className="text-center sm:text-[2rem] md:text-[3rem] xl:text-[6rem] font-bold font-mono tracking-wider leading-tight text-oxfordBlue drop-shadow-2xl">
            Budget Tracker
          </p>
          <p className="text-left sm:text-[1rem] md:text-[1rem] xl:text-[2rem] font-bold font-mono tracking-wider leading-tight text-oxfordBlue drop-shadow-2xl flex justify-center items-center">
            Created By Serkan Çalkay
          </p>
          <button onClick={clickHandler} className="mt-5 py-2 px-5 rounded-lg shadow-xl bg-oxfordBlue text-oxfordBlue-light text-[1rem] font-bold hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            Start Tracking
          </button>
        </div>
      </div>
    </div>
  );
}

import Login from "@/components/Login";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quiz App | Sign In",
  description: "Sign In to start playing",
};

const Account = () => {
  return (
    <div className="bg-slate-100 w-full">
  <div className="max-w-sm mx-auto w-full flex flex-col justify-center items-center h-screen sm:h-full md:h-screen py-10 px-4 sm:px-8 ">
      <div className=" py-4 relative">
        <h1 className="text-3xl text-yellow-400 font-bold">Quiz <span className="text-black ">App</span> </h1>
        <Image
          src="/SVG/ask.png"
          width={40}
          height={40}
          alt="logo"
          className=" object-contain -top-4 -right-4 absolute bounded-shake"
        />
      </div>
      <Image
          src="/SVG/quiz.png"
          width={180}
          height={180}
          alt="logo"
          className=" object-contain my-8 sm:my-6 md:my-8 shake-button"
        />
      <Login />
    </div>
    </div>
  
  );
};

export default Account;

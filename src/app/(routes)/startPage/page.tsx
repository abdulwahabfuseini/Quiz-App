"use client";

import { Button } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const StartPage = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="w-full max-w-2xl mx-auto py-10 h-screen sm:h-full md:h-screen grid place-content-center place-items-center">
        <Image
          src="/SVG/coding.png"
          width={250}
          height={200}
          alt="quiz"
          className=" object-contain"
        />
        <div className="py-8 text-white">
          <h1 className="text-2xl font-semibold spinloader">
            {" "}
            Quiz Time
          </h1>
        </div>
        <button
          type="button"
          onClick={() => router.push("/account")}
          className="bg-red-700 text-lg font-semibold px-4 py-3 rounded-lg text-white hover:bg-green-700 transition-all ease-in-out"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default StartPage;

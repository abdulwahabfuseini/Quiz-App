"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";

const GetStarted = () => {
  const router = useRouter();

  return (
    <div className="">
      <div className="w-full max-w-2xl mx-auto py-10 h-screen sm:h-full md:h-screen gap-y-7 grid place-content-center place-items-center">
        <Image
          src="/SVG/start.png"
          width={300}
          height={200}
          alt="quiz"
          className="object-contain shake-bounce"
        />

        <h4 className="text-3xl Text">
          <Typewriter
            words={["Quiz Time ..."]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={90}
          />
        </h4>
        <button
          type="button"
          onClick={() => router.push("/account")}
          className="aqua-background text-xl font-semibold px-4 py-2 rounded-lg text-white hover:bg-green-800 transition-all ease-in-out"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default GetStarted;

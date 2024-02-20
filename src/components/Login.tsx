"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const session = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/categories")
      toast.success("Welcome to Quiz App")
    }
  })
  
  return (
    <div className="grid gap-y-3 w-full ">
      <button
        onClick={() => signIn("google")}
        className="flex items-center gap-5 justify-center w-full px-4 py-2 bg-white border text-lg font-semibold rounded-lg"
      >
        <Image
          src="/SVG/googlesvg.png"
          alt="google"
          width={30}
          height={30}
          className="object-contain"
        />
        <h1>Continue with Google</h1>
      </button>
      <button
        onClick={() => signIn("github")}
        className="flex items-center justify-center gap-5 px-4 py-2 bg-white border  text-lg font-semibold rounded-lg"
      >
        <Image
          src="/SVG/github.png"
          alt="github"
          width={31}
          height={31}
          className="object-contain"
        />
        <h1>Continue with Github</h1>
      </button>
    </div>
  );
};

export default Login;

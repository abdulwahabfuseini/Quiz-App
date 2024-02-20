"use client"

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Logout = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "unauthenticated") {
      router.push("/");
    }
  });

  return (
    <button
      onClick={() => signOut()}
      className="text-lg aqua-background text-white font-bold py-1.5 px-2 sm:px-3 rounded-lg"
    >
      Log Out
    </button>
  );
};

export default Logout;

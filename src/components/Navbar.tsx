"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Logout from "./Logout";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Image
            src={session?.user?.image || ""}
            width={40}
            height={40}
            alt="profile"
            className="rounded-full object-contain"
          />
          <h1 className=" font-bold text-lg sm:text-xl Text truncate">{session?.user?.name}</h1>
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import Logout from "./Logout";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
        return window.scrollY > 40 ? setSticky(true) : setSticky(false)
    })
  })

  return (
    <div className={`${sticky ? "fixed top-0 left-0 w-full bg-white shadow z-50": ""} px-3 sm:px-8 py-4`}>
      <div className="max-w-7xl mx-auto  flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Image
            src={session?.user?.image || ""}
            width={40}
            height={40}
            loading="eager"
            alt="profile"
            className="rounded-full object-contain"
          />
          <h1 className=" font-bold  sm:text-xl Text truncate">{session?.user?.name}</h1>
        </div>
        <Logout />
      </div>
    </div>
  );
};

export default Navbar;

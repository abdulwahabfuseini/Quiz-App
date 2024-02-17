"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-3 sm:px-5 flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <Image
            src={session?.user?.image}
            width={25}
            height={25}
            alt="profile"
          />
          <h1>{session?.user?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

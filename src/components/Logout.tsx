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

  return <button onClick={() => signOut()}>Logout</button>;
};

export default Logout;

"use client";

import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

const Loading = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [isLoading]);

  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center flex-col gap-4">
           <h4 className="text-3xl Text">
          <Typewriter
            words={["Please Wait ..."]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            // delaySpeed={800}
          />
        </h4>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Loading;

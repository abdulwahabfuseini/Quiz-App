"use client";

import { QuizContext } from "@/contexts/QuizProvider";
import { Button } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const Results = () => {
  const [quizState] = useContext(QuizContext);
  const { data: session } = useSession();
  const router = useRouter();

  
  return (
    <div className="grid place-content-center py-6 place-items-center text-center gap-4">
      <h1 className="text-xl font-semibold">
        Congratutions, {" "}
        <span className="text-base font-semibold">{session?.user?.name}</span>
      </h1>
      <Image
        src="/SVG/cup.gif"
        alt="award"
        width={200}
        height={200}
        className="object-contain"
      />
      <div>
        <h3 className="text-lg font-bold text-green-600 capitalize">
          You have completed the quiz
        </h3>
        <p className=" capitalize text-lg">
          You have got{" "}
          <span className="text-2xl font-semibold">
          {quizState.correctAnswersCount}
          </span>{" "}
          out of{" "}
          <span className="text-2xl font-semibold">
            {quizState.QuizData[0].questions.length}
          </span> {" "}
          questions right
        </p>
      </div>
      <Button
        type="primary"
        htmlType="button"
        className="bg-green-600 text-lg h-11 px-6 font-semibold"
        onClick={() => router.push("/categories")}
      >
        Restart
      </Button>
    </div>
  );
};

export default Results;

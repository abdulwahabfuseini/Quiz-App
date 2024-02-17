"use client";

import { useRouter } from "next/navigation";
import { useEffect, useContext, useRef, useState } from "react";
import { QuizContext } from "@/contexts/QuizProvider";
import { QuizCategory } from "@/contexts/Types";
import { Button } from "antd";
import Quizzes from "@/components/quizzes/Quizzes";
import Results from "@/components/quizzes/Results";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Quiz: React.FC<{ params: { id: string } }> = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = params;
  const { data: session } = useSession();

  const [quizState, dispatch] = useContext(QuizContext);

  const selectedCategoryRef = useRef<QuizCategory | null>(null);

  useEffect(() => {
    setLoading(true);
    const category = decodeURIComponent(id).replace(/-/g, " ");
    const fetchedCategory = quizState.QuizData.find(
      (fetchedCategory) =>
        fetchedCategory.category.toLowerCase() === category.toLowerCase()
    );

    if (!fetchedCategory) {
      router.push("/categories");
    } else {
      selectedCategoryRef.current = fetchedCategory;
      dispatch({ type: "RESTART" });
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [id, dispatch, router, quizState.QuizData]);

  if (!id || !selectedCategoryRef.current) {
    return (
      <div className="grid h-screen place-content-center place-items-center">
        <h1 className="spinloader text-xl">Loading</h1>
      </div>
    );
  }

  const currentQuestion =
    selectedCategoryRef.current.questions[quizState.currentQuestionIndex];

  return (
    <>
      <div className=" ">
        <div className="flex items-center gap-3 px-3 sm:px-6 max-w-6xl mx-auto py-5">
          <Image
            src={session?.user?.image || ""}
            width={40}
            height={40}
            alt="profile"
            className="rounded-full object-contain"
          />
          <h1 className=" font-semibold">{session?.user?.name}</h1>
        </div>
      </div>
      <div className="py-14 max-w-5xl mx-auto px-3">
        <div>{quizState.showResults && <Results />}</div>
        <div>
          {!quizState.showResults && (
            <div className="max-w-4xl mx-auto sm:p-5 md:mt-28 lg:mt-20 rounded-lg">
              <h1 className=" capitalize text-2xl font-semibold text-green-600">
                {id} Quiz
              </h1>
              <div>
                <div className="pt-2 font-bold text-red-600">
                  Question {quizState.currentQuestionIndex + 1} /{" "}
                  {quizState.QuizData[0].questions.length}
                </div>
                <div>
                  <Quizzes
                    currentQuestion={currentQuestion}
                    category={""}
                    questions={[]}
                  />
                </div>
                <Button
                  type="primary"
                  htmlType="button"
                  className="bg-green-600 text-lg h-11 font-semibold"
                  onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                  disabled={!quizState.isAnswerSelected}
                >
                  Next Question
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Quiz;

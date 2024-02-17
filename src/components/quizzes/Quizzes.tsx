import React, { useContext } from "react";
import { QuizContext } from "@/contexts/QuizProvider";
import QuizAnswers from "../quizzes/QuizAnswers";
import { QuizCategory } from "@/contexts/Types";

const Quizzes = ({ currentQuestion }: QuizCategory) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
      <h1 className="text-lg py-2">{currentQuestion.question}</h1>
      <div className="grid sm:grid-cols-2 w-full my-2 mb-6 gap-x-2 gap-y-3">
        {currentQuestion.answers.map((answer: string, index: number) => (
          <QuizAnswers
            key={index}
            answerText={answer}
            index={index}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectAnswer={(answerText: string) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Quizzes;


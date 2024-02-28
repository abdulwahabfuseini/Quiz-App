"use client";

import React, { useContext } from "react";
import { QuizContext } from "@/contexts/QuizProvider";
import QuizAnswers from "../quizzes/QuizAnswers";
import { QuizCategory } from "@/contexts/Types";

const Quizzes: React.FC<QuizCategory> = ({ currentQuestion }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  const handleAnswerSelection = (answerText: string) => {
    dispatch({ type: "SELECT_ANSWER", payload: answerText });
  };

  return (
    <div>
      <span className="text-lg py-2">{currentQuestion.question}</span>
      <div className="grid sm:grid-cols-2 w-full my-2 mb-6 gap-x-2 gap-y-3">
        {currentQuestion.shuffledAnswers.map(
          (answer: string, index: number) => (
            <QuizAnswers
              key={index}
              answerText={answer}
              index={index}
              currentAnswer={quizState.currentAnswer}
              correctAnswer={currentQuestion.correctAnswer}
              onSelectAnswer={handleAnswerSelection}
            />
          )
        )}
      </div>
    </div>
  );
};

Quizzes.displayName = "Quizzes";

export default Quizzes;

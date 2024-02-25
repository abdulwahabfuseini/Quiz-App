// QuizProvider.tsx

"use client";

import React, { createContext, useReducer, Reducer, ReactNode } from "react";
import { QuizData } from "@/assets/QuizData";
import { shuffleAnswersForCategory, shuffleAnswersForQuiz } from "@/components/Helper";
import { QuizCategory } from "./Types";

interface QuizState {
  QuizData: QuizCategory[];
  currentQuestionIndex: number;
  showResults: boolean;
  correctAnswersCount: number;
  answers: string[];
  currentAnswer: string;
  isAnswerSelected: boolean;
}

type QuizAction =
  | { type: "NEXT_QUESTION" }
  | { type: "SELECT_ANSWER"; payload: string }
  | { type: "RESTART" };

const initialState: QuizState = {
  QuizData: QuizData.map(shuffleAnswersForCategory),
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswersCount: 0,
  answers: [],
  currentAnswer: "",
  isAnswerSelected: false,
};

const reducer: Reducer<QuizState, QuizAction> = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.QuizData[0].questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

        const shuffledQuiz = shuffleAnswersForQuiz();
        console.log("shuffledQuiz:", shuffledQuiz);
      
        const category = shuffledQuiz[currentQuestionIndex];
        console.log("category:", category);
      
        // Check if category and category.questions exist
        const questions = category ? category.questions : [];
        console.log("questions:", questions);
      
        // Check if questions[0] and questions[0].shuffledAnswers exist
        const answers = showResults
          ? []
          : questions[0] && questions[0].shuffledAnswers
          ? questions[0].shuffledAnswers
          : [];
      

      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
        isAnswerSelected: false,
      };
    }

    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload ===
        state.QuizData[0].questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;

      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
        isAnswerSelected: true,
      };
    }
    case "RESTART": {
      return initialState;
    }
    default:
      return state;
  }
};

export const QuizContext = createContext<
  [QuizState, React.Dispatch<QuizAction>]
>([initialState, () => {}]);

interface QuizProviderProps {
  children: ReactNode;
}

const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};

export default QuizProvider;

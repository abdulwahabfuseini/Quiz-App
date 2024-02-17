"use client";

import React, { createContext, useReducer, Reducer, ReactNode } from "react";
import { QuizData } from "@/assets/QuizData";
import { shuffleAnswers } from "@/components/Helper";
import { QuizCategory } from "./Types";

interface QuizState {
  QuizData: QuizCategory[];
  currentQuestionIndex: number;
  showResults: boolean;
  correctAnswerCount: number;
  answers: string[];
  currentAnswer: string;
}

type QuizAction =
  | { type: "NEXT_QUESTION" }
  | { type: "SELECT_ANSWER"; payload: string }
  | { type: "RESTART" };

const initialState: QuizState = {
  QuizData: QuizData as QuizCategory[],
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswers(QuizData[0]),
  currentAnswer: "",
};

const reducer: Reducer<QuizState, QuizAction> = (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults =
        state.currentQuestionIndex === state.QuizData[0].questions.length - 1;

      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;

      const answers = showResults
        ? []
        : shuffleAnswers(state.QuizData[0][currentQuestionIndex]);

      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload ===
        state.QuizData[0].questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;

      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
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

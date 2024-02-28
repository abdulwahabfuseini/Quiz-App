"use client";

import React, { createContext, useReducer, Reducer, ReactNode } from "react";
import { QuizData } from "@/assets/QuizData";
import {
  shuffleAnswersForCategory,
  shuffleAnswersForQuiz,
} from "@/components/Helper";
import { QuizCategory } from "./Types";

interface QuizState {
  QuizData: QuizCategory[];
  currentQuestionIndex: number;
  currentCategoryIndex: number;
  showResults: boolean;
  correctAnswersCount: number;
  answers: string[];
  currentAnswer: string;
  isAnswerSelected: boolean;
}

type NextQuestionAction = { type: "NEXT_QUESTION" };
type SelectAnswerAction = { type: "SELECT_ANSWER"; payload: string };
type RestartAction = { type: "RESTART" };

type QuizAction = NextQuestionAction | SelectAnswerAction | RestartAction;

const initialState: QuizState = {
  QuizData: QuizData.map(shuffleAnswersForCategory),
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswersCount: 0,
  answers: [],
  currentAnswer: "",
  isAnswerSelected: false,
  currentCategoryIndex: 0,
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
      const category = shuffledQuiz[currentQuestionIndex];
      const questions = category?.questions || [];
      const answers = showResults ? [] : questions[0]?.shuffledAnswers || [];

      return {
        ...state,
        currentCategory: category?.category,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: "",
        isAnswerSelected: false,
      };
    }
    case "SELECT_ANSWER": {
      const currentCategory = state.QuizData[state.currentCategoryIndex];
      const currentQuestionIndex = state.currentQuestionIndex;
      const questions = currentCategory?.questions || [];
      const currentQuestion = questions[currentQuestionIndex];
    
      // Retrieve the correct answer for the current question and category
      const correctAnswer = currentQuestion?.correctAnswer;
      console.log("🚀 ~ correctAnswer:", correctAnswer)
    
      // Check if the correctAnswer is not undefined and action.payload is equal to correctAnswer
      const isCorrectAnswer =
        
        correctAnswer !== undefined && action.payload === correctAnswer;
        console.log("🚀 ~ isCorrectAnswer:", isCorrectAnswer)
        return {
          ...state,
          correctAnswersCount: isCorrectAnswer
            ? state.correctAnswersCount + 1
            : state.correctAnswersCount,
          currentAnswer: action.payload,
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

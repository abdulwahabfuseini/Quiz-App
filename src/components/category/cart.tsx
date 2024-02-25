// "use client";

// import React, { ReactNode, createContext, useContext, useReducer } from "react";
// import { QuizData } from "@/assets/QuizData";
// import { QuizAction, QuizContextProps, QuizState } from "./Types";

// const initialState: QuizState = {
//   QuizData,
//   currentCategoryIndex: 0,
//   currentQuestionIndex: 0,
//   answers: [],
//   isAnswerSelected: false,
//   correctAnswersCount: 0,
//   showResults: false,
//   currentAnswer: "",
// };

// const quizReducer = (state: QuizState, action: QuizAction): QuizState => {
//   switch (action.type) {
//     case "SELECT_CATEGORY":
//       return {
//         ...state,
//         currentCategoryIndex: parseInt(action.payload),
//         currentQuestionIndex: 0,
//         isAnswerSelected: false,
//         correctAnswersCount: 0,
//         showResults: false,
//         answers: state.QuizData[
//           parseInt(action.payload)
//         ].questions[0].incorrectAnswers.concat(
//           state.QuizData[parseInt(action.payload)].questions[0].correctAnswer
//         ),
//       };
//     case "SELECT_ANSWER":
//       const selectedAnswer = action.payload;
//       const correctAnswer =
//         state.QuizData[state.currentCategoryIndex].questions[
//           state.currentQuestionIndex
//         ].correctAnswer;
//       const isCorrect = selectedAnswer === correctAnswer;

//       return {
//         ...state,
//         answers: [...state.answers, selectedAnswer],
//         isAnswerSelected: true,
//         correctAnswersCount: isCorrect
//           ? state.correctAnswersCount + 1
//           : state.correctAnswersCount,
//       };
//     case "NEXT_QUESTION":
//       const nextQuestionIndex = state.currentQuestionIndex + 1;
//       const isLastQuestion =
//         nextQuestionIndex ===
//         state.QuizData[state.currentCategoryIndex].questions.length;

//       return {
//         ...state,
//         currentQuestionIndex: nextQuestionIndex,
//         isAnswerSelected: false,
//         showResults: isLastQuestion,
//       };
//     case "RESTART":
//       return {
//         ...state,
//         currentQuestionIndex: 0,
//         answers: [],
//         isAnswerSelected: false,
//         correctAnswersCount: 0,
//         showResults: false,
//       };
//     default:
//       return state;
//   }
// };

// export const QuizContext = createContext<
//   [QuizState, React.Dispatch<QuizAction>]
// >([initialState, () => {}]);

// interface QuizProviderProps {
//   children: ReactNode;
// }

// const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
//   const value = useReducer(quizReducer, initialState);

//   return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
// };

// export default QuizProvider;

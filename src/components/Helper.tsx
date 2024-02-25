// helper.ts

import { QuizData } from "@/assets/QuizData";

export const shuffleArray = (array: string[]): string[] => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// Function to shuffle the answers for a given question
export const shuffleAnswersForQuestion = (question: any): any => {
  const { correctAnswer, incorrectAnswers } = question;
  const allAnswers = [correctAnswer, ...incorrectAnswers];
  const shuffledAnswers = shuffleArray(allAnswers);
  return { ...question, shuffledAnswers: shuffledAnswers };
  // Return the question object with shuffledAnswers excluding the first element (correct answer)
};

// Function to shuffle answers for all questions in a category
export const shuffleAnswersForCategory = (category: any): any => {
  const shuffledQuestions = category.questions.map(shuffleAnswersForQuestion);
  return { ...category, questions: shuffledQuestions };
};

// Function to shuffle answers for all questions in all categories
export const shuffleAnswersForQuiz = (): any[] => {
  return QuizData.map((category) => shuffleAnswersForCategory(category));
};

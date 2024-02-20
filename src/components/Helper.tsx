import { QuizCategory } from "@/contexts/Types";

export const shuffleAnswers = (question: QuizCategory["questions"][0]) => {
  if (!question || !question.incorrectAnswers) {
    return [];
  }

  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};


// // Helper function to shuffle an array
// export const shuffleArray = (array: string[]): string[] => {
//   const shuffledArray = [...array];
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// };

// // Modified shuffleAnswers function to shuffle an array of answers
// export const shuffleAnswers = (question: { correctAnswer: string; incorrectAnswers: string[] }): string[] => {
//   const { correctAnswer, incorrectAnswers } = question;
//   const allAnswers = [correctAnswer, ...incorrectAnswers];
//   return shuffleArray(allAnswers);
// };


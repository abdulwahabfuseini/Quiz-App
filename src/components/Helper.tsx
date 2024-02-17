import { QuizCategory } from "@/contexts/Types";

export const shuffleAnswers = (questions: QuizCategory) => {
  if (!questions || !questions.incorrectAnswers) {
    return [];
  }

  const unshuffledAnswers = [
    questions.correctAnswer,
    ...questions.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

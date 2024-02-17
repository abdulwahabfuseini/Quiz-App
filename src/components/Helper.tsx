import { QuizCategory } from "@/contexts/Types";

export const shuffleAnswers = (questions: QuizCategory) => {
  if (!questions || !questions.answers) {
    return [];
  }

  const unshuffledAnswers = [
    questions.correctAnswer,
    ...questions.answers,
  ];

  return unshuffledAnswers
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

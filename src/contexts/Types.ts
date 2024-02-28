
export type CategoryProps = {
  id?: number;
  title: string;
  image: string;
  path: string;
  bg: string;
};

export interface ProAnswersProps {
  answerText: string;
  index: number;
  onSelectAnswer: (answer: string) => void;
  currentAnswer: string;
  correctAnswer: string;
}

export interface QuizCategory {
  [x: string]: any;
  category: string;
  questions: {
    [x: string]: any;
    question: string;
    incorrectAnswers: string[];
    correctAnswer: string;
  }[];
}

  

export type CategoryProps = {
  id?: number;
  title: string;
  image: string;
  path: string;
  bg: string;
};


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

  
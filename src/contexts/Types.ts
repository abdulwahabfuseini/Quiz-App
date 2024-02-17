// export type QuestionProps = {
//   question: string;
//   answers: [];
//   correctAnswer: string;
// };

// export type AnswerProps = {
//   answers: [];
//   correctAnswer: string;
// };

export type CategoryProps = {
  id?: number;
  title: string;
  image: string;
  path: string;
  bg: string;
};


export interface QuizCategory {
  [x: string]: any;
  id?: number,
  category: string;
  questions: {
    [x: string]: any;
    question: string;
    incorrectAnswers: string[];
    correctAnswer: string;
  }[];
}

  
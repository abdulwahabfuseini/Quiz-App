import { FaCheck, FaTimes } from "react-icons/fa";

interface ProAnswersProps {
  answerText: string;
  index: number;
  onSelectAnswer: (answer: string) => void;
  currentAnswer: string;
  correctAnswer: string;
}

const QuizAnswers: React.FC<ProAnswersProps> = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letterMapping = ["A:", "B:", "C:", "D:"];
  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;
  const correctAnswerSelected = isCorrectAnswer
    ? "correct-answer"
    : "";
  const wrongAnswerSelected = isWrongAnswer
    ? "wrong-answer"
    : "";
  const disabled = currentAnswer ? "disable" : "";

  return (
    <div
      className={`border py-2 px-2 sm:px-3 bg-white shadow-md overflow-hidden text-lg rounded-md flex gap-x-2 items-center cursor-pointer  ${correctAnswerSelected} ${wrongAnswerSelected} ${disabled}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <span>{letterMapping[index]}</span>
      <p className="flex-1 truncate w-full">{answerText}</p>
      <span>{isCorrectAnswer && <FaCheck className="text-green-700" /> }</span>
      <span>{isWrongAnswer && <FaTimes className="text-red-700"  /> }</span>
      
     
    </div>
  );
};

export default QuizAnswers;

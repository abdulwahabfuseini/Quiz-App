// // src/App.js
// import React, { useState } from "react";
// import { QuizData } from "./QuizData";
// import Question from "./components/Question";
// import AnswerOptions from "./components/AnswerOptions";

// const App = () => {
//   const [currentCategory, setCurrentCategory] = useState("Programming");
//   const [currentQuestion, setCurrentQuestion] = useState(0);

//   const categoryQuestions = QuizData.find(
//     (category) => category.category === currentCategory
//   );

//   const handleNextQuestion = () => {
//     setCurrentQuestion(currentQuestion + 1);
//   };

//   return (
//     <div className="App">
//       <h1>Quiz App</h1>
//       <h2>{currentCategory}</h2>
//       <Question questionText={categoryQuestions.questions[currentQuestion].questionText} />
//       <AnswerOptions
//         answerOptions={categoryQuestions.questions[currentQuestion].answerOptions}
//       />
//       <button onClick={handleNextQuestion}>Next Question</button>
//     </div>
//   );
// };

// export default App;


// ===== Question ==== 

// // src/components/Question.js
// import React from "react";

// const Question = ({ questionText }) => {
//   return <div className="question-text">{questionText}</div>;
// };

// export default Question;



// AnswerOptions


// // src/components/AnswerOptions.js
// import React from "react";

// const AnswerOptions = ({ answerOptions }) => {
//   return (
//     <div className="answer-section">
//       {answerOptions.map((answerOption, index) => (
//         <button key={index}>{answerOption.answerText}</button>
//       ))}
//     </div>
//   );
// };

// export default AnswerOptions;

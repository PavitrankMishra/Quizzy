import { useState } from "react";

const Quiz = () => {
  const questions = [
    {
      question: "Which planet is closest to the Sun?",
      option: ["Venus", "Mercury", "Earth", "Mars"],
      answer: "Mercury",
    },
    {
      question:
        "Which of the following is primarily used for structuring web pages?",
      option: ["Python", "Java", "HTML", "C++"],
      answer: "HTML",
    },
    {
      question: "Which chemical symbol stands for Gold?",
      option: ["Au", "Gd", "Ag", "Pt"],
      answer: "Au",
    },
    {
      question:
        "Which of these processes is not typically involved in refining petroleum?",
      option: [
        "Fractional distillation",
        "Cracking",
        "Polymerization",
        "Filtration",
      ],
      answer: "Filtration",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePreviousQuestions = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedAnswer(null);
    }
  };
  return (
    <>
      <div>
        <h1>
          Questions {currentIndex + 1}: {questions[currentIndex].question}
        </h1>
        <ol>
          {questions[currentIndex].option.map((option, index) => (
            <li key={index}>
              <p
                onClick={() => handleAnswerClick(option)}
                style={{
                  cursor: "pointer",
                  color: selectedAnswer === option ? "white" : "black",
                  textTransform: "capitalize",
                  backgroundColor:
                    selectedAnswer === option ? "green" : "yellow",
                  height: "40px",
                  width: "500px",
                  paddingLeft: "20px",
                  display: "inline-block",
                  lineHeight: "40px",
                  borderRadius: "5px",
                }}
              >
                {option}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <button
        onClick={handlePreviousQuestions}
        disabled={currentIndex === 0}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Previous
      </button>

      <button
        onClick={handleNextQuestion}
        disabled={currentIndex === questions.length - 1}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Next
      </button>
    </>
  );
};

export default Quiz;

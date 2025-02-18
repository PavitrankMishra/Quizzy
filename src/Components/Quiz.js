import { useState } from "react";

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = ["Which planet is closest to the Sun?"];

  //   "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
  //   "Which of the following is primarily used for structuring web pages?",
  //   "Which chemical symbol stands for Gold?",
  //   "Which of these processes is not typically involved in refining petroleum?",

  const options = ["Venus", "Mercury", "Earth", "Mars"];

  const correctAnswer = "Mercury";

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      <p>Quizzy</p>

      {questions.map((q, index) => (
        <div key={index}>
          <h1>Question: {q}</h1>
          <h2>options: </h2>
          <ol></ol>
          <ol>
            {options.map((o) => (
              <li>
                <p
                  style={{
                    cursor: "pointer",
                    color: "red",
                    textTransform: "capitalize",
                    backgroundColor: "yellow",
                    height: "40px",
                    width: "500px",
                    paddingLeft: "20px",
                  }}
                >
                  {o}
                </p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Quiz;

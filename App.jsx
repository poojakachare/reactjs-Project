import "./App.css";
import { useEffect,useMemo,useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";



function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: " The International Literacy Day is observed on",
      answers: [
        {
          text: "A) Nov 28",
          correct: false,
        },
        {
          text: "B) Sep 8",
          correct: true,
        },
        {
          text: "C) May 2",
          correct: false,
        },
        {
          text: " D) Sep 22",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "The language of Lakshadweep. a Union Territory of India, is",
      answers: [
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Tamil",
          correct: false,
        },
        {
          text: "Telugu",
          correct: false,
        },
        {
          text: "Malayalam",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: " In which group of places the Kumbha Mela is held every twelve years?",
      answers: [
        {
          text: "Ujjain. Purl; Prayag. Haridwar",
          correct: false,
        },
        {
          text: "Prayag. Haridwar, Ujjain,. Nasik",
          correct: true,
        },
        {
          text: "Rameshwaram. Purl, Badrinath. Dwarika",
          correct: false,
        },
        {
          text: "Chittakoot, Ujjain, Prayag,'Haridwar",
          correct: false,
        },
       
      ],
    },
    {
      id: 6,
      question: " Which day is observed as the World Standards  Day?",
      answers: [
        
        {
          text: "Oct 14",
          correct: true,
        },
        {
          text: "Nov 15",
          correct: false,
        },
        {
          text: "Dec 2",
          correct: false,
        },
        {
          text: "June 26",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "September 27 is celebrated every year as",
      answers: [
        {
          text: "Teachers' Day",
          correct: false,
        },
        {
          text: "National Integration Day",
          correct: false,
        },
        {
          text: "World Tourism Day",
          correct: true,
        },
        {
          text: "International Literacy Day",
          correct: false,
        },
       
      ],
    },
    {
      id: 8,
      question: "The death anniversary of which of the following leaders is observed as Martyrs' Day?",
      answers: [
        {
          text: "Smt. Indira Gandhi",
          correct: false,
        },
        {
          text: "PI. Jawaharlal Nehru",
          correct: false,
        },
        {
          text: "Lal Bahadur Shastri",
          correct: false,
        },
        {
          text: "Mahatma Oandhi",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: " World Health Day is observed on",
      answers: [
        {
          text: "Apr 7",
          correct: true,
        },
        {
          text: "Mar 6",
          correct: false,
        },
        {
          text: "Mar 15",
          correct: false,
        },
        {
          text: "Apr 28",
          correct: false,
        },
        
      ],
    },
    {
      id: 10,
      question: " Pongal is a popular festival of which state?",
      answers: [
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Kerala",
          correct: false,
        },
        {
          text: "Andhra Pradesh",
          correct: false,
        },
        {
          text: "Tamil Nadu",
          correct: true,
        },
      ],
    },

  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import {getQuestions} from "../helper/general"
import { useNavigate } from 'react-router-dom';
import determineMood from "./Mood";
import BreathingCircleTab from "./BreathCircle"



const style = document.createElement("style");


style.textContent = `
  body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom right, #e0f7fa, rgb(231, 247, 255));
    margin: 0;
  }

  .dark {
    background: linear-gradient(to bottom right, rgb(49, 56, 57), rgb(39, 67, 86));
  }
.title{
    font-size: 1.4rem;
    font-weight: bold;
   background: linear-gradient(to right,rgb(39, 245, 221), #2563eb );
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
    text-shadow: 1px 1px 3px rgba(108, 77, 77, 0.2);
  
}
    .tab{
    background: radial-gradient(circle,rgb(247, 250, 250),rgb(244, 244, 244));
    padding: 12px;
    width:500px;
    border-radius: 15px;
    justify-content: space-between;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    height: 130px;
    font-weight: 400;
    font-size: 1.4rem;
    margin-bottom: 1px;
    }
    
    .tab2{
    background:rgb(244, 238, 205);
    padding: 12px;
    width:500px;
    border-radius: 15px;
    justify-content: space-between;
    border-width: 1px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    height: 170px;
    font-weight: 400;
    font-size: 1.2rem;
     margin-bottom: 1px;
    }
     .tab3{
    background:rgb(208, 221, 253);
    padding: 12px;
    width:500px;
    justify-content: space-between;
    border-width: 1px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    height: 230px;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 1px;
    border-radius: 15px;

    }
     .tab4{
    background:rgb(224, 191, 254);
    padding: 12px;
    width:500px;
    justify-content: space-between;
    border-width: 1px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    height: 200px;
    font-weight: 400;
    font-size: 1.2rem;
     margin-bottom: 1px;
    border-radius: 15px;

    }
     .tab5{
    background:rgb(226, 255, 247);
    padding: 12px;
    width:500px;
    justify-content: space-between;
    border-width: 1px;
    border-color: red;
    box-shadow: 0 8px 16px rgba(26, 31, 29, 0.2);
    flex-direction: column;
    height: 170px;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 1px;
    border-radius: 15px;

    }
      .tab6{
    background:rgb(204, 242, 253);
    padding: 12px;
    width:500px;
    justify-content: space-between;
    border-width: 1px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    height: 150px;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 1px;
    border-radius: 15px;

    }
     .tab7{
    background:rgb(253, 204, 204);
    padding: 12px;
    width:500px;
    justify-content: space-between;
    border-width: 1px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    height: 200px;
    font-weight: 400;
    font-size: 1.2rem;
     margin-bottom: 0px;
    border-radius: 15px;

    }
     .tab8{
     display:flex;
margin:auto;
width:450px;
padding:8px;
font-weight: 300;
margin-top: 20px;
margin-bottom: 10px;
background: red ;
border-radius: 9999px;
     }
  .container {
    max-width: 600px;
    margin: 1px auto;
    padding: 15px;
  }
    .animated-button {
  background: linear-gradient(to right, #4f46e5, #3b82f6);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  border: 2px solid white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.animated-button:hover {
  transform: scale(1.05);
  background: linear-gradient(to right, #6366f1, #60a5fa);
  border-color: #e0e0e0;
}

.animated-button:active {
  transform: scale(0.95);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
}

  .card {
    background-color: #ffffff;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 650px;
  }
    .card2{
      background-color: #ffffff;
    padding: 40px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1300px;
    }
.breathing-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(circle, #84ffff, #00bcd4);
  transition: transform 4s ease-in-out;
  transform: scale(1); 
}

.inhale {
  transform: scale(1.5);
}

.exhale {
  transform: scale(1);
}

  .dark .card {
    background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
    transition: background-color 0.3s ease, transform 0.2s ease;
  }

  .border-2 {
    border-radius: 15px;
    border: 2px solid rgb(145, 166, 188);
    background-color: rgb(245, 245, 229);
  }

  .border-2:hover {
    background-color: rgb(172, 203, 217);
    transition: background-color 0.71s ease, transform 1s ease;

  }

  .answer-button {
    width: 100%;
    padding: 15px 20px;
    margin-bottom: 10px;
    border: 2px solid #007bff;
    background-color: #f0f0f0;
    border-radius: 6px;
    color:rgb(88, 93, 98);
    font-weight: 500;
    font-size: 1.4rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease, transform 0.2s ease;
    cursor: pointer;
  }

  .dark .answer-button {
    background-color: #555;
    color: #ddd;
  }

  .answer-button.selected {
   background: linear-gradient(to right,rgb(39, 245, 221), #2563eb );
    color:rgb(245, 250, 255);
    font-weight: 700;
  }

  .dark .answer-button.selected {
    background-color: rgb(86, 101, 99);
    color:rgb(255, 255, 255);
    font-weight: bold;
  }
.hover-next:hover {
  background: linear-gradient(to right,rgb(39, 245, 221), #2563eb );
  transform: scale(1.05);
  transition: background-color 0.6s ease, transform 1s ease;
}
.longer{
width:180px;
font-weight: 800;
padding:8px;
color: white;
background: linear-gradient(to right,rgb(34, 8, 237),rgb(41, 129, 237) );
transition: background-color 0.6s ease, transform 1.05s ease;
margin:auto;
justify-content: space-between;
}
.bb{
margin:auto;
width:230px;
padding:8px;
color: white;
font-weight: 700;
font-weight: bold;
margin-top: 30px;
margin-bottom: 10px;
background: linear-gradient(to right,rgb(114, 247, 116),rgb(79, 193, 50) );
border-radius: 9999px;
}

  .answer-button:hover {
   background: linear-gradient(to right,rgb(39, 245, 221), #2563eb );
    transition: background-color 0.71s ease, transform 1s ease;
    transform: scale(1.05);
    color: rgb(255, 255, 255);
  }

  .dark .answer-button:hover {
    background-color: rgb(130, 136, 139);
    transition: background-color 0.71s ease, transform 1s ease;
    transform: scale(1.05);
  }

  .rounded-full {
    border-radius: 9999px;
  }

  .font-bold {
    font-weight: 700;
  }

  .font-extrabold {
    font-weight: 800;
  }

  .hover-next:enabled: hover {
    transition: background-color 0.71s ease, transform 1s ease;
    transform: scale(1.05);
  }
.transition-all {
    transition-duration: 150ms;
  }
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background: none !important;
  color: gray !important;
  box-shadow: none !important;
  transform: none !important;
}


  .main-title {
    font-size: 3.3rem;
    font-weight: bold;
   background: linear-gradient(to right,rgb(39, 245, 221), #2563eb );
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
    margin-bottom: 34px;
    text-shadow: 1px 1px 3px rgba(108, 77, 77, 0.2);
  }

  .dark .main-title {
    background: linear-gradient(to right,rgb(63, 145, 208),rgba(219, 19, 230, 0.86) );
    -webkit-background-clip: text;
     color: transparent;
    text-align: center;
    margin-bottom: 34px;
    text-shadow: 1px 1px 3px rgba(255, 255, 255, 0.23);
  }

  .card h3 {
    font-size: 1.6rem;
    font-weight: 800;
  }

  h3 {
    line-height: 2.2rem;
    color: rgb(94, 88, 88);
    text-align: center;
    margin-bottom: 1.8rem;
  }

  .dark h3 {
    color: #ddd;
  }

  .mb-4 {
    margin-bottom: 2rem 32px;
  }

  .dark-mode-btn {
    position: fixed;
    top: 15px;
    right: 15px;
    padding: 10px 15px;
    font-size: 1.5rem;
    border: 12px;
    border-radius: 6px;
    cursor: pointer;
    background-color: #17a2b8;
    color: white;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease;
  }

  .dark-mode-btn:hover {
    background-color: rgb(1, 11, 87);
    transition: background-color 0.71s ease, transform 1s ease;
    transform: scale(1.05);
  }

  .progress {
    display: flex;
    height: 15px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #e9ecef;
  }

  .progress-bar {
   background: linear-gradient(to right,rgb(39, 245, 221), #2563eb );
    transition: width 0.6s ease;
  }
.button-click {
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

.button-click:active {
  transform: scale(0.96);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2) inset;
}

  .progress-bar-info {
    background-color: #17a2b8;
  }
`;
document.head.appendChild(style);


export default function  QuestionCard()  {
  const [isDark, setIsDark] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selectedScores, setSelectedScores] = useState([]); 
  const [showBreathing, setShowBreathing] = useState(false);
const navigate =useNavigate();

const [questions, setQuestions] = useState([]);
 const progress = questions.length > 0
    ? ((current + (selectedScores[current] !== undefined ? 1 : 0)) / questions.length) * 100
    : 0;
      React.useEffect(()=>{
  const fetchData=async () =>{
  const data = await getQuestions();
setQuestions(data);
    }
    fetchData()
  },[])

  function toggleDarkMode() {
    document.body.classList.toggle("dark");
    setIsDark(!isDark);
  }

// App.js
function handleAnswer(score, optionText) { // <-- Change 'option' to 'score, optionText'
  const newSelectedScores = [...selectedScores];
  newSelectedScores[current] = score; // <-- Update selectedScores
  setSelectedScores(newSelectedScores);
  console.log(`Answered question ${current} with score: ${score}`); // Good for debugging
}
  function handlePrev() {
    if (current > 0) setCurrent(current - 1);
  }

// App.js
function handleNext() {
  if (current < questions.length - 1) {
    setCurrent(current + 1);
  } else {
    // Pass the array of scores (which is selectedScores) to determineMood
    const mood = determineMood(selectedScores); // <-- Use selectedScores here
    console.log("Final selected scores: ", selectedScores); // <-- Log selectedScores
    navigate('/advice', { state: { mood } });
  }
}
return (
    <>
      <button className="dark-mode-btn" onClick={toggleDarkMode}>
        {isDark ? "☾" : "☼"}
      </button>
      <button
  className="dark-mode-btn"
  style={{ top: "65px", right: "15px" }} 
  onClick={() => setShowBreathing(true)}
>
  Breathe with me
</button>
{showBreathing && <BreathingCircleTab onClose={()=> setShowBreathing(false)}/>}

  <div className="container">
        <h1 className="main-title font-extrabold">Mental Health Companion</h1>

        <div className="card">
          <ProgressBar now={progress} className="mb-4" variant="info" />

          {/* ADD THIS CONDITIONAL RENDERING HERE! */}
          {questions.length > 0 && questions[current] ? ( // Check if questions exist and current question exists
            <>
              <h3>{questions[current].question}</h3>

              <div className="font-extrabold">
                {questions[current].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option.score, option.text)}
                    className={`answer-button ${
                      selectedScores[current] === option.score ? "selected" : ""
                    }`}
                  >
                    {option.text}
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {current > 0 && (
                  <button
                    className="rounded-full font-extrabold border-2 hover-next"
                    onClick={handlePrev}
                    style={{ padding: "8px 16px" }}
                  >
                    PREVIOUS
                  </button>
                )}
                <button
                  className="rounded-full font-extrabold border-2 hover-next"
                  onClick={handleNext}
                  disabled={selectedScores[current] === undefined}
                  style={{ padding: "8px 16px" }}
                >
                  NEXT
                </button>
              </div>
            </>
          ) : (
            <p style={{ textAlign: 'center', fontSize: '1.5rem', marginTop: '50px' }}>
              Loading questions...
              {/* You might also want to show an error if questions fail to load */}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
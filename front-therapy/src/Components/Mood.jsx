import React from "react"; // React is not directly used in determineMood, but often part of a React file.

export default function determineMood(answers) { // Renamed 'scores' to 'answers' for clarity, matching App.js
  if (!answers || answers.length === 0) {
    console.log("No answers provided for mood determination.");
    return "Incomplete answers";
  }

 const totalScore = answers.reduce((sum, answer) => {
  if (typeof answer === 'number') {
    return sum + answer;
  } else if (typeof answer === 'object' && answer !== null && typeof answer.score === 'number') {
    return sum + answer.score;
  } else {
    console.warn("Unexpected answer format encountered:", answer);
    return sum;
  }
}, 0);


  
  const maxPossibleScore = answers.length *4; 

  const percentage = (totalScore / maxPossibleScore) * 100;
  console.log("Total Score:", totalScore, "Percentage:", percentage);

  if (percentage >= 49) return "Happy 😊";
  if (percentage >= 33) return "Peaceful 🧘";
  if (percentage >= 20) return "Melancholic 😔";
  if (percentage >= 10) return "Anxious 😟";
  return "Angry 😡";
}

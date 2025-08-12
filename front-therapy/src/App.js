import React from "react"

import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import QuestionCard from "./Components/QuestionCard"
import AdvicePage from './Components/AdvicePage';
function App() {
  return (
  <Router>
    <div>
      {<nav>
<ul>
  <li>
    <Link to="/">Home</Link>
  </li>
    <li>
    <Link to="/questions">Questions</Link>
  </li>
  <li>
    <Link to="/advice">AdvicePage</Link>
  </li>
</ul>
      </nav> }
      <Routes>

<Route path="/questions" element={<QuestionCard />} />
<Route path ="/advice" element ={<AdvicePage/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;

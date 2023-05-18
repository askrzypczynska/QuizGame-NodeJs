import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainSite from './Components/MainSite/MainSite';
import QuizSite from './Components/QuizSite/QuizSite';
import AddQuestionSite from './Components/AddQuestion/AddQuestionSite'

function App(props) {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainSite />} />
          {/* <Route path={`/quiz/${props.categoryName}`} element={<QuizSite />} /> */}
          <Route path="/quiz/" element={<QuizSite />} />
          <Route path="/add-own-question" element={<AddQuestionSite />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;

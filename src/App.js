import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainSite from './Components/MainSite/MainSite';
import QuizSite from './Components/QuizSite/QuizSite';
import AddQuestionSite from './Components/AddQuestion/AddQuestionSite'

function App(props) {

  const [categoryName, setCategoryName] = useState()

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainSite setCategoryName={setCategoryName}/>} />
          <Route path={`/quiz/${categoryName}`} element={<QuizSite categoryName={categoryName}/>} />
          <Route path="/add-own-question" element={<AddQuestionSite />} />
        </Routes>
      </div>
    </Router>
  );

}

export default App;

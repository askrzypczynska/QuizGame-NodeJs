import './App.css';
import React, { useState } from 'react';
import MainSite from './Components/MainSite/MainSite';
import QuizSite from './Components/QuizSite/QuizSite';
import AddQuestionSite from './Components/AddQuestion/AddQuestionSite'

function App() {



  return (
      <div className="App">
        {/* <MainSite /> */}
        {/* <QuizSite /> */}
        <AddQuestionSite />
      </div>
  );

}

export default App;

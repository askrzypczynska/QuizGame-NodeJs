import './QuizBox.css';
import React from 'react';

function QuizBox() {

    return(
        <div className='QuizBox'>
            <div className="question">
                <span className="questionNumber">Pytanie 1/10</span>
                <p className="questionText">Który mamy rok, jeżeli dziś jest 2023 a ja musze wydlużyć ten teks aby sprawdzić jak sie zawija?</p>
            </div>
            <div className="answers">
                <button className="answerA">2020</button>
                <button className="answerB">2023</button>
                <button className="answerC">2012</button>
                <button className="answerD">1786</button>
            </div>
        </div>
    )

}

export default QuizBox;
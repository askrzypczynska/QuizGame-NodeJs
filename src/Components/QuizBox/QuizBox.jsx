import './QuizBox.css';
import React, { useState } from 'react';

function QuizBox(props) {

    const [scoreState, setScoreState] = useState([0, 0, false, ["", "", "", ""]]);

    let dataBaseReturn = [
        ["Ile masz lat?", "-2", "10", "25", "10", 3],
        ["Ile masz lat2?", "-3", "10", "25", "10", 2],
        ["Ile masz la3?", "-4", "10", "25", "10", 1],
        ["Ile masz lat4?", "-5", "10", "25", "10", 2],
        ["Ile masz lat5?", "-6", "10", "25", "10", 4],
        ["Ile masz lat66?", "-7", "10", "25", "10", 2],
        ["Ile 7masz lat7?", "-8", "10", "25", "10", 1],
        ["Ile masz lat8?", "-9", "10", "25", "10", 4],
        ["Ile masz lat9?", "-10", "10", "25", "10", 1],
        ["Ile masz 10?", "-11", "10", "25", "10", 3],
    ]

    let questionIndex = scoreState[0];
    let score = scoreState[1];
    let addClass = scoreState[3];

    const answerHandler = (e) => {

        switch(String(e.target.className)){
            case "answerA ":
                if(dataBaseReturn[questionIndex][5] === 1){
                    score ++
                    addClass[0] = "correctAnswer"
                }else{
                    addClass[0] = "badAnswer"
                }

                break;

            case "answerB ":
                if(dataBaseReturn[questionIndex][5] === 2){
                    score ++
                    addClass[1] = "correctAnswer"
                } else{
                    addClass[1] = "badAnswer"
                }

                break;

            case "answerC ":
                if(dataBaseReturn[questionIndex][5] === 3){
                    score ++
                    addClass[2] = "correctAnswer"
                }else{
                    addClass[2] = "badAnswer"
                }

                break;
                
            case "answerD ":
                if(dataBaseReturn[questionIndex][5] === 4){
                    score ++
                    addClass[3] = "correctAnswer"
                }else{
                    addClass[3] = "badAnswer"
                }
                
                break;
        }

        questionIndex++
        setTimeout(() => {setScoreState([questionIndex, score, false, ["", "", "", ""]])}, 500);
        setScoreState([questionIndex, score, true, addClass])

    }


    if(scoreState[2]){
        return(
            <div className='QuizBox'>
                <div className="question">
                    <span className="questionNumber">Pytanie {questionIndex}/10</span>
                    <p className="questionText">{dataBaseReturn[questionIndex - 1][0]}</p>
                </div>
                <div className="answers">
                    <button className={`answerA ${scoreState[3][0]}`} onClick={answerHandler}>{dataBaseReturn[questionIndex -1][1]}</button>
                    <button className={`answerB ${scoreState[3][1]}`} onClick={answerHandler}>{dataBaseReturn[questionIndex -1][2]}</button>
                    <button className={`answerC ${scoreState[3][2]}`} onClick={answerHandler}>{dataBaseReturn[questionIndex -1][3]}</button>
                    <button className={`answerD ${scoreState[3][3]}`} onClick={answerHandler}>{dataBaseReturn[questionIndex -1][4]}</button>
                </div>
            </div>
        )
    } else {
        return(
            <div className='QuizBox'>
                <div className="question">
                    <span className="questionNumber">Pytanie {questionIndex + 1}/10</span>
                    <p className="questionText">{dataBaseReturn[questionIndex][0]}</p>
                </div>
                <div className="answers">
                    <button className={`answerA ${addClass[0]}`} onClick={answerHandler}>{dataBaseReturn[questionIndex][1]}</button>
                    <button className={`answerB ${addClass[1]}`} onClick={answerHandler}>{dataBaseReturn[questionIndex][2]}</button>
                    <button className={`answerC ${addClass[2]}`} onClick={answerHandler}>{dataBaseReturn[questionIndex][3]}</button>
                    <button className={`answerD ${addClass[3]}`} onClick={answerHandler}>{dataBaseReturn[questionIndex][4]}</button>
                </div>
            </div>
        )
    }

}

export default QuizBox;
import './LogoQuiz.css';
import React from 'react';
import logo from "../../img/logo.png";
import { Link } from 'react-router-dom';

function LogoQuiz() {

    return(
        <div className='LogoQuiz'>
            <Link to="/">
                <img src={logo} alt="QuizGame Logo" />
            </Link>
        </div>  
    )

}

export default LogoQuiz;
import './LogoQuiz.css';
import React from 'react';
import logo from "../../img/logo.png";

function LogoQuiz() {

    return(
        <div className='LogoQuiz'>
            <img src={logo} />
        </div>  
    )

}

export default LogoQuiz;
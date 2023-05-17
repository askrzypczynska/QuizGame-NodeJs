import './QuizSite.css';
import React from 'react';
import QuizBox from '../QuizBox/QuizBox';
import LogoQuiz from '../LogoQuiz/LogoQuiz';
import Footer from '../Footer/Footer';

function QuizSite() {

    return(
        <div className='QuizSite'>
            <LogoQuiz />
            <QuizBox />
            <Footer />
        </div>  
    )

}

export default QuizSite;
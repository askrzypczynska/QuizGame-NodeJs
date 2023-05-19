import './QuizSite.css';
import React from 'react';
import QuizBox from '../QuizBox/QuizBox';
import LogoQuiz from '../LogoQuiz/LogoQuiz';
import Footer from '../Footer/Footer';
import ReturnOnMainSite from '../ReturnOnMainSite/ReturnOnMainSite';

function QuizSite(props) {


    return(
        <div className='QuizSite'>
            <ReturnOnMainSite />
            <LogoQuiz />
            <QuizBox categoryName={props.categoryName}/>
            <Footer />
        </div>  
    )

}

export default QuizSite;
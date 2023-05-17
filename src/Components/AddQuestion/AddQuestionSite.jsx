import './AddQuestionSite.css';
import React from 'react';
import LogoQuiz from '../LogoQuiz/LogoQuiz';
import Footer from '../Footer/Footer';
import AddQuestionForm from './AddQuestionForm/AddQuestionForm'

function AddQuestionSite() {

    return(
        <div className='AddQuestionSite'>
            <LogoQuiz />
            <AddQuestionForm />
            <Footer />
        </div>  
    )

}

export default AddQuestionSite;
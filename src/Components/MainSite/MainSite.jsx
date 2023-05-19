import './MainSite.css';
import React from 'react';
import AddQuestionBtn from '../AddQuestion/AddQuestionBtn/AddQuestionBtn'
import CategoriesText from '../Categories/CategoriesText';
import CategoriesBtns from '../Categories/CategoriesBtns';
import LogoQuiz from '../LogoQuiz/LogoQuiz';
import Footer from '../Footer/Footer';

function MainSite(props) {

    return(
        <div className='MainSite'>
            <LogoQuiz />
            <AddQuestionBtn />
            <CategoriesText />
            <CategoriesBtns setCategoryName={props.setCategoryName}/>
            
            <Footer />
        </div>  
    )

}

export default MainSite;
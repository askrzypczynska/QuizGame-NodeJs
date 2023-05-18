import './MainSite.css';
import React from 'react';
import AddQuestionBtn from '../AddQuestionBtn/AddQuestionBtn'
import CategoriesText from '../Categories/CategoriesText';
import CategoriesBtns from '../Categories/CategoriesBtns';
import LogoQuiz from '../LogoQuiz/LogoQuiz';
import Footer from '../Footer/Footer';

function MainSite() {

    return(
        <div className='MainSite'>
            <LogoQuiz />
            <AddQuestionBtn />
            <CategoriesText />
            <CategoriesBtns render={(props) => <CategoriesBtns {...props} />}/>
            
            <Footer />
        </div>  
    )

}

export default MainSite;
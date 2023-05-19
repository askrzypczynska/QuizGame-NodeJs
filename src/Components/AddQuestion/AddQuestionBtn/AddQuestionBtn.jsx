import './AddQuestionBtn.css';
import React from 'react';
import { Link } from 'react-router-dom';

function AddQuestionBtn() {

    return(
        <div className='AddQuestionBtn'>
            <Link to="/add-own-question"><button className="AddQuestion">Dodaj swoje własne pytanie!</button></Link>
        </div>  
    )

}

export default AddQuestionBtn;
import './AddQuestionForm.css';
import React, { useState, useEffect } from 'react';

function AddQuestionForm() {
    const initialValues = {
        category: "", 
        textQuestion: "", 
        goodAnswer: "", 
        badAnswers: ["", "", ""]
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'textQuestion') {
            setFormValues({ ...formValues, textQuestion: value });
        } else if (name === 'goodAnswer') {
            setFormValues({ ...formValues, goodAnswer: value });
        } else if (name.startsWith('badAnswer')) {
            const index = parseInt(name.replace('badAnswer', ''));
            const updatedBadAnswers = [...formValues.badAnswers];
            updatedBadAnswers[index] = value;
            setFormValues({ ...formValues, badAnswers: updatedBadAnswers });
        } else {
            setFormValues({ ...formValues, [name]: value });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);

    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 & isSubmit){
            setFormValues(initialValues)
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {}
        if (!values.category){
            errors.message = "Wybierz katygorię pytania!"
        } else if (!['Zwierzęta', 'Programowanie', 'Geografia', 'Historia', 'Matematyka', 'Lektury', 'Gry', 'Seriale'].includes(values.category)) 
        {
            errors.message = "Nieprawidłowa kategoria pytania!";
        }
        if (!values.textQuestion){
            errors.message = "Wpisz treść pytania!"
        }
        if (!values.goodAnswer){
            errors.message = "Wpisz poprawną odpowiedź!"
        }
        if (!values.badAnswers[0] || !values.badAnswers[1] || !values.badAnswers[2]){
            errors.message = "Wpisz 3 niepoprawne odpowiedzi!"
        }
        return errors;
    }

    return(
        <div className='AddQuestionForm'>
            <h1>Dodaj własne pytanie!</h1>
            {Object.keys(formErrors).length === 0 && isSubmit ? (<p>Pytanie zostało wysłane! Możesz dodać następne!</p>) :             <p>Wypełnij formularz i kliknij "Dodaj", aby dodać własne pytanie do bazy pytań strony.</p>}
            <form className='formBox' onSubmit={handleSubmit}>
                <label htmlFor="options">Wybierz kategorię pytania:</label>
                <input 
                    id="options" 
                    name="category" 
                    placeholder="Wybierz opcję" 
                    value={formValues.category} 
                    onChange={handleChange}
                    list="optionList"
                />
                <datalist id="optionList">
                    <option value="Zwierzęta" />
                    <option value="Programowanie" />
                    <option value="Geografia" />
                    <option value="Historia" />
                    <option value="Matematyka" />
                    <option value="Lektury" />
                    <option value="Gry" />
                    <option value="Seriale" />
                </datalist>

                <p>Wpisz treść pytania:</p>
                <input 
                    className='textQuestion' 
                    name="textQuestion"
                    value={formValues.textQuestion}
                    onChange={handleChange}
                    maxLength="60"
                ></input>

                <p>Wpisz prawidłową odpowiedź:</p>
                <input 
                    className='textAnswerGood' 
                    name="goodAnswer"
                    value={formValues.goodAnswer}
                    onChange={handleChange}
                    maxLength="40"
                ></input>

                <p>Wpisz 3 błędne odpowiedzi:</p>
                <input
                className='textAnswerBad'
                name="badAnswer0"
                value={formValues.badAnswers[0]}
                onChange={handleChange}
                maxLength="40"
                />
                <input
                className='textAnswerBad'
                name="badAnswer1"
                value={formValues.badAnswers[1]}
                onChange={handleChange}
                maxLength="40"
                />
                <input
                className='textAnswerBad'
                name="badAnswer2"
                value={formValues.badAnswers[2]}
                onChange={handleChange}
                maxLength="40"
                />

                <p className='errorsMessage'>&nbsp; {formErrors.message}</p>

                <button>Dodaj</button>
            </form>
        </div>
    )

}

export default AddQuestionForm;
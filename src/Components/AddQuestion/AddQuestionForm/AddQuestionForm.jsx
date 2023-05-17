import './AddQuestionForm.css';
import React from 'react';

function AddQuestionForm() {

    return(
        <div className='AddQuestionForm'>
            <h1>Dodaj własne pytanie!</h1>
            <p>Wypełnij formularz i kliknij "Dodaj", aby dodać własne pytanie do bazy pytań strony.</p>

            <label htmlFor="options">Wybierz kategorię pytania:</label>
            <input list="optionList" id="options" name="options" placeholder="Wybierz opcję" />
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

            <p>Wpisz treść pytania:</p><input></input>
            <p>Wpisz prawidłową odpowiedź:</p><input></input>
            <p>Wpisz 3 błędne odpowiedzi:</p><input></input><input></input><input></input>
        </div>
    )

}

export default AddQuestionForm;
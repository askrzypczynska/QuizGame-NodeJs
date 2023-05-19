import './Categories.css';
import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesBtns(props) {

    const categoryNameHandler = (e) => {
        props.setCategoryName(e.target.attributes.id.value)
    }

    return(
        <div className='CategoriesBtns'>            
            <Link to="/quiz/animals" onClick={categoryNameHandler}><button id="animals" className='btn1'><span role="img" aria-label="elephant" className="icon">🐘</span>Zwierzęta</button></Link>
            <Link to="/quiz/programing" onClick={categoryNameHandler}><button id="programing" className='btn2'><span role="img" aria-label="disc" className="icon">💾</span>Programowanie</button></Link>
            <Link to="/quiz/geography" onClick={categoryNameHandler}><button id="geography" className='btn3'><span role="img" aria-label="world" className="icon">🌐</span>Geografia</button></Link>
            <Link to="/quiz/history" onClick={categoryNameHandler}><button id="history" className='btn4'><span role="img" aria-label="bow" className="icon">🏹</span>Historia</button></Link>
            <Link to="/quiz/math" onClick={categoryNameHandler}><button id="math" className='btn4'><span role="img" aria-label="plus" className="icon">➕</span>Matematyka</button></Link>
            <Link to="/quiz/books" onClick={categoryNameHandler}><button id="books" className='btn2'><span role="img" aria-label="book"  className="icon">📖</span>Lektury</button></Link>
            <Link to="/quiz/games" onClick={categoryNameHandler}><button id="games" className='btn1'><span role="img" aria-label="game"  className="icon">🎮</span>Gry</button></Link>
            <Link to="/quiz/movie" onClick={categoryNameHandler}><button id="movie" className='btn3'><span role="img" aria-label="popcorn"  className="icon">🍿</span>Filmy</button></Link>
        </div>  
    )

}

export default CategoriesBtns;
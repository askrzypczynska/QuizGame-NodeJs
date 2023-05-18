import './Categories.css';
import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesBtns(props) {

    return(
        <div className='CategoriesBtns'>            
            <Link to="/quiz/"><button className='btn1'><span role="img" aria-label="elephant" className="icon">🐘</span>Zwierzęta</button></Link>
            <Link to="/quiz/programing"><button className='btn2'><span role="img" aria-label="disc" className="icon">💾</span>Programowanie</button></Link>
            <Link to="/quiz/geography"><button className='btn3'><span role="img" aria-label="world" className="icon">🌐</span>Geografia</button></Link>
            <Link to="/quiz/history"><button className='btn4'><span role="img" aria-label="bow" className="icon">🏹</span>Historia</button></Link>
            <Link to="/quiz/math"><button className='btn4'><span role="img" aria-label="plus" className="icon">➕</span>Matematyka</button></Link>
            <Link to="/quiz/books"><button className='btn2'><span role="img" aria-label="book"  className="icon">📖</span>Lektury</button></Link>
            <Link to="/quiz/games"><button className='btn1'><span role="img" aria-label="game"  className="icon">🎮</span>Gry</button></Link>
            <Link to="/quiz/movie"><button className='btn3'><span role="img" aria-label="popcorn"  className="icon">🍿</span>Seriale</button></Link>
        </div>  
    )

}

export default CategoriesBtns;
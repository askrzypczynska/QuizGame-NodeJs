import './Categories.css';
import React from 'react';

function CategoriesBtns() {


    return(
        <div className='CategoriesBtns'>
            <button><p className="icon">🐘</p>Zwierzęta</button>
            <button><p className="icon">💾</p>Programowanie</button>
            <button><p className="icon">🌐</p>Geografia</button>
            <button><p className="icon">🏹</p>Historia</button>
            <button><p className="icon">➕</p>Matematyka</button>
            <button><p className="icon">📖</p>Lektury</button>
            <button><p className="icon">🎮</p>Gry</button>
            <button><p className="icon">🍿</p>Seriale</button>
        </div>  
    )

}

export default CategoriesBtns;
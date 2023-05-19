import React from 'react';
import './ReturnOnMainSite.css';
import { Link } from 'react-router-dom';

function ReturnOnMainSite() {

    return(
        <div className='ReturnOnMainSite'>
            <Link to="/"><button className="ReturnOnMainSiteBtn">Wróć do wyboru kategori.</button></Link>
        </div>  
    )

}

export default ReturnOnMainSite;
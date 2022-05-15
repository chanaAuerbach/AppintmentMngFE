import React from 'react';
import {Link }from 'react-router-dom';

export default function MainMenu(){
    return <div className='mainMenu'>
        <Link to="/yoman">יומן</Link>
        <br></br>
        <Link to="/torimLehaiom">תורים להיום</Link>
        <br></br>
        <Link to="/activity">פעילות</Link>
        <br></br>
        <Link to="/torimLehishur">תורים לאישור</Link>
        <br></br>
        <Link to="/customers">לקוחות</Link>
        <br></br>
        <Link to="/importContacts">יבוא אנשי קשר</Link>
        <br></br>
        <Link to="/reports">דוחות</Link>
    </div>
}


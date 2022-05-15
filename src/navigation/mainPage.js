import React from 'react';
import {Link }from 'react-router-dom';

export default function MainMenu(){
    return <div className='mainMenu'>
        <Link to="/yoman">יומן</Link>
        <Link to="/torimLehaiom">תורים להיום</Link>
        <Link to="/activity">פעילות</Link>
        <Link to="/torimLehishur">תורים לאישור</Link>
        <Link to="/customers">לקוחות</Link>
        <Link to="/importContacts">יבוא אנשי קשר</Link>
        <Link to="/reports">דוחות</Link>
    </div>
}


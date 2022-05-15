import React, { useState } from 'react';
import AppointmentList from './AppointmentList';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


export default function Yoman(){
    const [dateSelected, setDate] = useState(new Date())
    return(<div className='yoman'>
        <h1>yoman</h1>
        <Calendar onClickDay={date=>{
      setDate(date)} }></Calendar>

        <AppointmentList dateSelected={dateSelected}></AppointmentList>
    </div>)
}





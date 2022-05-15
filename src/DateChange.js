import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {useState} from 'react'


const DateChange=()=>{
    const [dateSelect,setDate]=useState(new Date())
    return (
      <div className="App">
        <Calendar onClickDay={date=>{
      setDate(date)} }></Calendar>
  
  
      </div>
    );
}
export default DateChange

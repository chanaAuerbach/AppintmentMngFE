import React,{useEffect,useState}  from 'react';

export default function TorimLehishur(){
    const [Torim, setTorim] = useState([]);
    useEffect(() => {
        setTorim([
        { id: 1, date: new Date()},
        { id: 2,  date: new Date("05/14/2022") },
        { id: 3, date: new Date("07/23/2022") },
        { id: 4,  date: new Date("05/10/2022") },
      ]);
    }, []);
    
    return (
      <div className="reports" dir="rtl">
        <h1>תורים לאישור</h1>
        <div >
          {Torim.map((report) => (
            <Tor data={report} />
          ))}
        </div>
      </div>
    );
  }
  
  let style = {
    display: "flex",
    justifyContent: "space-between",
    width: "500px",
  };
  
  function Tor({ data }) {
    return (
      <div style={style} className="report">
        <span>{data.id}</span>
        <span>{data.date.toDateString()}</span>
        <button>שלח צינתוק</button>
        <button>ביטול</button>
      </div>
    );
  }

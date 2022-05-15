import React, { useEffect, useState } from "react";

export default function Reports() {
  const [reports, setReports] = useState([]);
  const [sort,setSort] = useState("עולה")
  useEffect(() => {
    setReports([
      { id: 1, serviceType: "תספורת", date: new Date(), price: 100 },
      { id: 2, serviceType: "החלקה", date: new Date("05/14/2022"), price: 120 },
      { id: 3, serviceType: "שיקום שיער", date: new Date("07/23/2022"), price: 90 },
      { id: 4, serviceType: "תסרוקת", date: new Date("05/10/2022"), price: 80 },
    ]);
  }, []);
  const sortBy = ({ target }) => {
    let temp = [...reports];
    switch (target.value) {
      case "מזהה לקוח":
        temp.sort((a,b)=>a.id - b.id);
        break;
      case "סוג שירות":
        temp.sort((a,b)=>(a.serviceType > b.serviceType)?1:(a.serviceType < b.serviceType)?-1:0)
        break;
      case "תאריך ושעה":
          temp.sort((a,b)=>a.date - b.date)
        break;
      case "תעריף שרות":
        temp.sort((a,b)=>a.price - b.price);
        break;
    }
    if(sort == "יורד")temp.reverse()
    setReports(temp)
  };
  const sortOrder = ({ target }) => {
   const temp = [...reports];
   temp.reverse()
   setReports(temp)   
   setSort(target.value)
  };
  return (
    <div className="reports" dir="rtl">
      <h1>reports</h1>
      <div >
        <label>מיין לפי: </label>
        <select onChange={sortBy}>
          {["מזהה לקוח", "סוג שירות", "תאריך ושעה", "תעריף שרות"].map((i) => (
            <option key={i}>{i}</option>
          ))}
        </select>
        <label>בסדר: </label>
        <select onChange={sortOrder}><option>עולה</option><option>יורד</option></select>
        {reports.map((report) => (
          <Report data={report} />
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

function Report({ data }) {
  return (
    <div style={style} className="report">
      <span>{data.id}</span>
      <span>{data.serviceType}</span>
      <span>{data.date.toDateString()}</span>
      <span>{data.price}</span>
    </div>
  );
}

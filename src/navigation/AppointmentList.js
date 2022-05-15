
import React, { useEffect, useState } from 'react';

export default  function AppointmentList({dateSelected}){
    const [list, setList] =useState([]);
    const getList = async()=>{
        // const fetchData =await fetch()
        // const data = await fetchData.json();
        setList(["djkjf","ad"])
    }
    useEffect(()=>{
        getList()
    },[])

    return <ul>
        {list.map(item=><li>{item}</li>)}
    </ul>
}
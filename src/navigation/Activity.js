import React from "react";
import { useForm } from "react-hook-form";

export default function Activity() {
  const { register, handleSubmit } = useForm();
  const formSubmit = (data) => {
 
  

    }
return (
    <form onSubmit={handleSubmit(formSubmit)}>
    להוסיף פעילות ללוח
    <br></br>
    <select name="list of busness" id="busness">

<option id="1" value="תספורת מבוגר">איפור מחותנת</option>
<option id="2" value=" תספורת ילד">איפור אחות</option>
<option id="3" value=" תספורת חלקה">איפור מלווה</option>
</select>
      <br></br>
       <input   placeholder="משך זמן פעילות" required  {...register("duringTime",)} />
      <br></br>
      <input   placeholder="תעריף" required  {...register("cost",)} />
      <br></br>
      <button type="submit">שמירה</button>
    </form>
     
   
  );
}

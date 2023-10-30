import React, {useState} from 'react'



export default function AgeCalculator() {
  const [age, setAge] = useState(" 0");
  let final_age;
let cur_date = new Date();
// console.log(cur_date);

  const calAge = ()=>{
    final_age = cur_date.getFullYear()-parseInt(document.getElementById("dob").value.slice(0,4)) 
    if(parseInt(document.getElementById("dob").value.slice(5,7))  > cur_date.getMonth()+1 ){
      
      final_age--;
      setAge(final_age );
    }
    else if(parseInt(document.getElementById("dob").value.slice(5,7))  === cur_date.getMonth()+1 ){
      if( parseInt(document.getElementById("dob").value.slice(8,10))>cur_date.getDate()){

        final_age--;
        setAge(final_age );

      }
      else{
        setAge(final_age);
      }
    }
    else if(final_age===0){
     
      final_age=(parseInt(document.getElementById("dob").value.slice(5,7)))/12;
      setAge(final_age);
    }
    else{
      setAge(final_age);
    }
  }


  return (

    <div>

      <h1>Age Calculator</h1>
      <h4>Enter your date of birth</h4>
      <div >
      <input  type="date" id="dob" name="dob_tab" />
      </div>
      <button className="btn" type="submit" onClick={calAge}>Calculate Age</button>
      <h3>Your are {age} years old..</h3>
    </div>
  )
}

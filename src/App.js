import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

function Calculator(){
 const [height,setHeight] = useState(0);
 const [weight,setWeight] = useState(0);
 const [bmi,setBmi] = useState("");
 const [message,setMessage] = useState("");
 function calculatebmi(e){
  e.preventDefault();
    let bmi = (weight/height**2)*10000;
    setBmi(bmi.toFixed(2));
     if(bmi<18.5){
      setMessage("you are underweight");
     }
     else if(bmi>18.5 && bmi<=25){
      setMessage("yaayyy you are normal");
     }
     else if(bmi>25 && bmi<=30){
      setMessage("oh dear! you are overweight");
     }
     else if(bmi<=0){
      setMessage("0")
     }
     else{
      setMessage("oops! you gonna burst");
     }
 }
 
 return <div className='box'> 
  <button>&times;</button>
  <div className='calculator'>
  <h1>BMI calculator</h1>
  <div className='form'>
  <form onClick={calculatebmi}>
    <label>WEIGHT(in KG)</label>
    <input type='number' onChange={(e)=>setWeight(e.target.value)}></input>
    <label>HEIGHT(in KG)</label>
    <input type='number' onChange={(e)=>setHeight(e.target.value)}></input>
    <button className='btn' >SUBMIT</button>
    <h2>your bmi is:<span>{bmi}</span></h2>
    <h1>{message}</h1>
  </form>
  </div>
  </div>
  </div>
}

export default App;

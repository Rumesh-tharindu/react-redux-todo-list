import React,{useState} from "react";
import "./styles.css";

export default function App() {
  const [text,handleText]=useState('hi there')

  const btnClick=()=>{
     
   handleText("You are changed")
  }
  return (
    <div className="App">
     <p>{text}</p>
     <button onClick={btnClick}>change text</button>
    </div>
  );
}

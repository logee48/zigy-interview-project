import './App.css';
import { useEffect, useState } from 'react';
import { db } from './config';
import {ref, onValue } from 'firebase/database';

function App() {
  const [textdata,settextdata] = useState({});
  useEffect(()=>{
    onValue(ref(db,'zigytestpage'),(snapshot)=>{
      const data = snapshot.val();
      if(data!=null){
      settextdata(data)}
    })
  },[]);
  return (
    <>
    {Object.keys(textdata).map((id)=>{
          return (
            <>
            {textdata[id].condition === true?<div>{textdata[id].text}</div>:<div></div>}
            </>
          )
        })}
    </>
  );
}

export default App;

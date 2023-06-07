import { useEffect, useState } from 'react';
import './App.css';
import { db } from './config';
import { set, ref} from 'firebase/database';

function App() {

  const [checkval1, setcheckval1] = useState(true);
  const [checkval2, setcheckval2] = useState(true);
  const [checkval3, setcheckval3] = useState(true);

  const handlechange1 = () =>{
    setcheckval1(!checkval1);
    if(checkval1===true){
    set(ref(db, "zigytestpage/0"),{
      condition: true,
      text: "APPLE"
    })}
    else{
      set(ref(db, "zigytestpage/0"),{
        condition: false,
        text: "APPLE"
      })
    }
  }
  const handlechange2 = () =>{
    setcheckval2(!checkval2);
    if(checkval2===true){
      set(ref(db, "zigytestpage/1"),{
        condition: true,
        text: "BANANA"
      })}
      else{
        set(ref(db, "zigytestpage/1"),{
          condition: false,
          text: "BANANA"
        })
      }
  }
  const handlechange3 = () =>{
    setcheckval3(!checkval3);
    if(checkval3===true){
      set(ref(db, "zigytestpage/2"),{
        condition: true,
        text: "MANGO"
      })}
      else{
        set(ref(db, "zigytestpage/2"),{
          condition: false,
          text: "MANGO"
        })
      }
  }
  useEffect(()=>{
    set(ref(db, "zigytestpage/0"),{
      condition: false,
      text: "APPLE"
    })
    set(ref(db, "zigytestpage/1"),{
      condition: false,
      text: "BANANA"
    })
    set(ref(db, "zigytestpage/2"),{
      condition: false,
      text: "MANGO"
    })
  },[]);
  return (
    <>
      <div>
        <input type='checkbox' value={checkval1} onChange={handlechange1}></input>
        APPLE
      </div>
      <div>
        <input type='checkbox' value={checkval2} onChange={handlechange2}></input>
        BANANA
      </div>
      <div>
        <input type='checkbox' value={checkval3} onChange={handlechange3}></input>
        MANGO
      </div>
    </>
  );
}

export default App;

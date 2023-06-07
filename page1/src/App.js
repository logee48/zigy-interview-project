import { useEffect, useState } from 'react';
import './App.css';
import { db } from './config';
import { set, ref} from 'firebase/database';

function App() {

  const [checkval1, setcheckval1] = useState(true);
  const [checkval2, setcheckval2] = useState(true);
  const [checkval3, setcheckval3] = useState(true);
  const [checkval4, setcheckval4] = useState(true);
  const [checkval5, setcheckval5] = useState(true);
  const [checkval6, setcheckval6] = useState(true);

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
  const handlechange4 = () =>{
    setcheckval4(!checkval4);
    if(checkval4===true){
    set(ref(db, "zigytestpage/3"),{
      condition: true,
      text: "demo1"
    })}
    else{
      set(ref(db, "zigytestpage/3"),{
        condition: false,
        text: "demo1"
      })
    }
  }
  const handlechange5 = () =>{
    setcheckval5(!checkval5);
    if(checkval5===true){
    set(ref(db, "zigytestpage/4"),{
      condition: true,
      text: "demo2"
    })}
    else{
      set(ref(db, "zigytestpage/4"),{
        condition: false,
        text: "demo2"
      })
    }
  }
  const handlechange6 = () =>{
    setcheckval6(!checkval6);
    if(checkval6===true){
    set(ref(db, "zigytestpage/5"),{
      condition: true,
      text: "demo3"
    })}
    else{
      set(ref(db, "zigytestpage/5"),{
        condition: false,
        text: "demo3"
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
    set(ref(db, "zigytestpage/3"),{
      condition: false,
      text: "demo1"
    })
    set(ref(db, "zigytestpage/4"),{
      condition: false,
      text: "demo2"
    })
    set(ref(db, "zigytestpage/5"),{
      condition: false,
      text: "demo3"
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
      <div>
        <input type='checkbox' value={checkval4} onChange={handlechange4}></input>
        demo1
      </div>
      <div>
        <input type='checkbox' value={checkval5} onChange={handlechange5}></input>
        demo2
      </div>
      <div>
        <input type='checkbox' value={checkval6} onChange={handlechange6}></input>
        demo3
      </div>
    </>
  );
}

export default App;

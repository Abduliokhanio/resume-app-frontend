import React, {useState} from 'react'

function First_SL() {
    const [n, setN] = useState(0);
    
    function increment(){
      setN(n + 1);
    }

    function decrement(){
        if(n>0){
        setN(n - 1);
        }  
    }
    
    return (
      <div>
          <h1>Function</h1>
          <h1>{n}</h1>
          <button onClick={increment}>Increment </button>
          <button onClick={decrement}>Decrement </button>
      </div>
    );
  }

export default First_SL

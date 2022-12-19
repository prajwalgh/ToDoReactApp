import React from 'react';
import './App.css';

function App() {
  const list=['hw',"jq","as","asas",":assa"];
  const listitems = list.map((number)=><li>{number}</li>)
  return (
    <div style={{textAlign: "center"}}>
      <div><p>TO DO APP</p></div>
      <div>
        <ui>
      
          {listitems}
        
        </ui> 
      </div>
    </div>
  );
}

export default App;

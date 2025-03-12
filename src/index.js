import React from 'react';
import ReactDOM from 'react-dom/client';

const customStyle={
  color: ""
}
function time() {
  
    if(new Date().getHours() <= 12) {
      customStyle.color="red"; 
      return "Good Morning";
      
    } else if(new Date().getHours() <= 18) {
      customStyle.color="green";
      return "Good Afternoon";
      
    }
    else {
      customStyle.color="blue";
      return "Good Evening";
    }

  
}
const mytime= time()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 style={customStyle}>Hello, World!</h1>
    <p>
      {mytime}
    </p>
  </div>
);


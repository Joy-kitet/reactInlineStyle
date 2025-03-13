import React from 'react';
import ReactDOM from 'react-dom/client';
import {  time, customStyle } from './index.jsx';



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

